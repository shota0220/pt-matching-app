export interface DashboardUser {
  id: string;
  email: string;
  password: string;
  name: string;
  gender: string | null;
  height: number | null;
  weight: number | null;
  medicalHistory: string | null;
  symptom: string | null;
  lat: number | null;
  lng: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardReservation {
  id: string;
  userId: string;
  date: Date;
  status: "PENDING" | "CONFIRMED" | "COMPLETED";
  price: number;
  user: DashboardUser;
}

export interface TherapistDashboardData {
  id: string;
  walletBalance: number;
  rating: number;
  reservations: DashboardReservation[];
}
