import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getBookingDisplayMode } from '../../lib/booking.js'
import { isBookingEnabled } from '../../lib/features.js'
import BookingModal from './BookingModal.jsx'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const displayMode = getBookingDisplayMode()

  const openBooking = useCallback(() => {
    if (!isBookingEnabled()) return
    if (displayMode === 'modal') {
      setModalOpen(true)
    }
  }, [displayMode])

  const closeBooking = useCallback(() => setModalOpen(false), [])

  const value = useMemo(
    () => ({ openBooking, displayMode, isBookingEnabled: isBookingEnabled() }),
    [openBooking, displayMode],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}
      {displayMode === 'modal' && isBookingEnabled() ? (
        <BookingModal open={modalOpen} onClose={closeBooking} />
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
