Below is a suggested `README.md` for the **Piu Cabins** project—an advanced hotel management application built with React and related technologies:

---

# 🏨 Piu Cabins

**Piu Cabins** is a comprehensive web application designed to assist hotel staff in efficiently managing cabins, bookings, check-ins/check-outs, and guest information. Built with React, it employs a Single Page Application (SPA) architecture to ensure optimal performance and user experience.

---

## 🚀 Key Features

### 🔐 Authentication- Secure login required for hotel staff to access the systm.- User registration is restricted to internal operations within the applicatin.

### 🏠 Cabins Managemen

- Display a list of all cabins with images, names, capacity, prices, and current discouts.
- Create new cabins, including image uplods.
- Edit and delete existing cabns.

### 📆 Bookings Managemet

- Comprehensive dashboard displaying all bookings with details such as arrival/departure dates, status, number of guests, and breakfast optons.
- Booking statuses include: `unconfirmed`, `checked-in`, and `checked-ut`.
- Automatic price calculation with optional breakfast incluion.

### 🙍 Guests Managemnt

- Manage guest information, including full name, email, national ID, nationality, and country flag for easy identifiction.

### ✅ Check-in / Check-ut

- Facilitate seamless check-in and check-out procsses
- Verify and confirm payments during chek-in
- Option to add breakfast during check-in if not pre-selcted.

### 📊 Dashbard

- Overview of guests arriving and departing on the curret da.
- Statistics on bookings, revenue, and occupancyrate.
- Visual charts displaying sales trends and average stay durtions.

### ⚙️ Settngs

- Customize breakfast prices, minimum/maximum nights for bookings, and cabin price ange.
- Toggle between light and dark modes for user intrface.

---

## 🧭 Main Routes

| Feature          | Route                 |
| ---------------- | --------------------- |
| Dashboard        | `/dashboard`          |
| Bookings         | `/bookings`           |
| Cabins           | `/cabins`             |
| Booking Check-in | `/checkin/:bookingID` |
| App Settings     | `/settings`           |
| User Management  | `/users`              |
| Login            | `/login`              |
| Account Settings | `/account`            |

---

## 🛠️ Technologies Used

| Functionality      | Library / Tool                      |
| ------------------ | ----------------------------------- |
| Routing            | React Router                        |
| Styling            | Styled Components                   |
| Remote State       | React Query                         |
| Local UI State     | React Context API + useState        |
| Form Handling      | React Hook Form                     |
| Charts & Utilities | Recharts, React Hot Toast, date-fns |
| Backend & Auth     | Supabase                            |

---

## 🔒 ImportantNotes

- Access to the application is secured; only authenticated hotel staff cn lo in.
- User registration is managed internally to ensure authorized personnl access.
