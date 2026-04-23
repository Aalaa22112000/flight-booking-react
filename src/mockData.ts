import { Airline, FlightDeal } from './types';

export const airports = [
  { id: 'DXB', city: 'دبي', country: 'الإمارات', code: 'DXB' },
  { id: 'AUH', city: 'أبو ظبي', country: 'الإمارات', code: 'AUH' },
  { id: 'RUH', city: 'الرياض', country: 'السعودية', code: 'RUH' },
  { id: 'JED', city: 'جدة', country: 'السعودية', code: 'JED' },
  { id: 'MED', city: 'المدينة المنورة', country: 'السعودية', code: 'MED' },
  { id: 'CAI', city: 'القاهرة', country: 'مصر', code: 'CAI' },
  { id: 'DOH', city: 'الدوحة', country: 'قطر', code: 'DOH' },
  { id: 'AMM', city: 'عمان', country: 'الأردن', code: 'AMM' },
  { id: 'BEY', city: 'بيروت', country: 'لبنان', code: 'BEY' },
  { id: 'KWI', city: 'الكويت', country: 'الكويت', code: 'KWI' },
  { id: 'BAH', city: 'المنامة', country: 'البحرين', code: 'BAH' },
  { id: 'MCT', city: 'مسقط', country: 'عُمان', code: 'MCT' },
  { id: 'LHR', city: 'لندن', country: 'المملكة المتحدة', code: 'LHR' },
  { id: 'CDG', city: 'باريس', country: 'فرنسا', code: 'CDG' },
  { id: 'IST', city: 'اسطنبول', country: 'تركيا', code: 'IST' },
];

export const airlines: Airline[] = [
  { id: '1', name: 'طيران الإمارات', country: 'الإمارات' },
  { id: '2', name: 'الخطوط الجوية القطرية', country: 'قطر' },
  { id: '3', name: 'الخطوط السعودية', country: 'السعودية' },
  { id: '4', name: 'مصر للطيران', country: 'مصر' },
  { id: '5', name: 'الملكية الأردنية', country: 'الأردن' },
  { id: '6', name: 'طيران الشرق الأوسط', country: 'لبنان' },
  { id: '7', name: 'الاتحاد للطيران', country: 'الإمارات' },
  { id: '8', name: 'الطيران العماني', country: 'عُمان' },
];

// Some dummy data for the popular deals section
export const popularDeals: FlightDeal[] = [
  {
    id: 'd1',
    airline: airlines[2], // Saudia
    from: 'الرياض',
    to: 'دبي',
    price: 850,
    currency: 'ريال',
    departureDate: '2024-07-15',
    isDirect: true,
  },
  {
    id: 'd2',
    airline: airlines[3], // EgyptAir
    from: 'القاهرة',
    to: 'جدة',
    price: 4200,
    currency: 'جنيه',
    departureDate: '2024-07-20',
    isDirect: true,
  },
  {
    id: 'd3',
    airline: airlines[1], // Qatar
    from: 'الدوحة',
    to: 'لندن',
    price: 2100,
    currency: 'ريال',
    departureDate: '2024-08-05',
    returnDate: '2024-08-15',
    isDirect: true,
  },
  {
    id: 'd4',
    airline: airlines[0], // Emirates
    from: 'دبي',
    to: 'باريس',
    price: 2500,
    currency: 'درهم',
    departureDate: '2024-08-10',
    isDirect: false,
  },
  {
    id: 'd5',
    airline: airlines[4], // Royal Jordanian
    from: 'عمان',
    to: 'اسطنبول',
    price: 320,
    currency: 'دينار',
    departureDate: '2024-07-22',
    isDirect: true,
  },
  {
    id: 'd6',
    airline: airlines[5], // MEA
    from: 'بيروت',
    to: 'لارنكا',
    price: 150,
    currency: 'دولار',
    departureDate: '2024-07-12',
    isDirect: true,
  },
];
