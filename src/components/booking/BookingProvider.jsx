import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getBookingDisplayMode, getBookingOptions } from '../../lib/booking.js'
import { isBookingEnabled } from '../../lib/features.js'
import BookingModal from './BookingModal.jsx'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const displayMode = getBookingDisplayMode()

  const openBooking = useCallback((optionId) => {
    if (!isBookingEnabled()) return
    if (displayMode !== 'modal') return

    const options = getBookingOptions()

    if (optionId) {
      setSelectedOptionId(optionId)
      setModalOpen(true)
      return
    }

    if (options.length === 1) {
      setSelectedOptionId(options[0].id)
    } else {
      setSelectedOptionId(null)
    }

    setModalOpen(true)
  }, [displayMode])

  const closeBooking = useCallback(() => {
    setModalOpen(false)
    setSelectedOptionId(null)
  }, [])

  const selectBookingOption = useCallback((optionId) => {
    setSelectedOptionId(optionId)
  }, [])

  const value = useMemo(
    () => ({
      openBooking,
      selectBookingOption,
      displayMode,
      isBookingEnabled: isBookingEnabled(),
    }),
    [openBooking, selectBookingOption, displayMode],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}
      {displayMode === 'modal' && isBookingEnabled() ? (
        <BookingModal
          open={modalOpen}
          onClose={closeBooking}
          selectedOptionId={selectedOptionId}
          onSelectOption={selectBookingOption}
        />
      ) : null}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
