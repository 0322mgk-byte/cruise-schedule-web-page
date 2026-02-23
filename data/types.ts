// ─── Timeline Item Types (Discriminated Union) ───

export interface LocationMarkerItem {
  type: "location-marker";
  label: string;
  extraMarginTop?: boolean;
}

export interface TextItem {
  type: "text";
  time?: string;
  text: string;
  details?: string[];
  warning?: string;
}

export interface TouristSpotItem {
  type: "tourist-spot";
  modalId: string;
  title: string;
  shortTitle: string;
  images: string[];
  description: string;
  mobileLabel?: string;
  mobileSublabel?: string;
}

export interface ShoreExcursionItem {
  type: "shore-excursion";
  modalId: string;
  title: string;
  mobileLabel?: string;
  mobileSublabel?: string;
}

export interface InfoCardItem {
  type: "info-card";
  modalId: string;
  title: string;
  emoji: string;
  mobileLabel: string;
  mobileSublabel: string;
  sections: {
    heading: string;
    items: InfoCardListItem[];
  }[];
}

export interface InfoCardListItem {
  text: string;
  bold?: string;
  isWarning?: boolean;
}

export interface CruiseAtSeaItem {
  type: "cruise-at-sea";
  modalId: string;
  title: string;
  images: string[];
  description: string;
  bulletPoints?: string[];
  closingText?: string;
  mobileLabel?: string;
  mobileSublabel?: string;
}

export interface MealItem {
  type: "meal";
  text: string;
}

export interface HotelItem {
  type: "hotel";
  name: string;
  note?: string;
}

export interface DepartureNoticeItem {
  type: "departure-notice";
  time?: string;
  text: string;
  details?: string[];
  warning?: string;
}

export interface ClosingMessageItem {
  type: "closing-message";
  text: string;
}

export type TimelineItem =
  | LocationMarkerItem
  | TextItem
  | TouristSpotItem
  | ShoreExcursionItem
  | InfoCardItem
  | CruiseAtSeaItem
  | MealItem
  | HotelItem
  | DepartureNoticeItem
  | ClosingMessageItem;

// ─── Modal Types (Discriminated Union) ───

export interface InfoTableRow {
  label: string;
  value: string;
}

export interface GoogleMapLink {
  label: string;
  query: string;
}

export interface TouristSpotModal {
  type: "tourist-spot";
  id: string;
  title: string;
  images: string[];
  descriptions: string[];
  infoTable: InfoTableRow[];
  googleMapQuery?: string;
  googleMapEmbed?: string;
}

export interface ShoreExcursionTour {
  name: string;
  tourCode: string;
  duration: string;
  price: string;
  highlight: string;
  note?: string;
}

export interface ShoreExcursionModal {
  type: "shore-excursion";
  id: string;
  title: string;
  intro: string;
  tours: ShoreExcursionTour[];
  notices: string[];
}

export interface ShipInfoModal {
  type: "ship-info";
  id: string;
  title: string;
  images: string[];
  descriptions: string[];
  infoTable: InfoTableRow[];
}

export interface CruiseAtSeaModal {
  type: "cruise-at-sea";
  id: string;
  title: string;
  images: string[];
  descriptions: string[];
  bulletPoints?: string[];
  closingText?: string;
  infoTable: InfoTableRow[];
}

export interface InfoModal {
  type: "info";
  id: string;
  title: string;
  sections: {
    heading: string;
    items: InfoCardListItem[];
  }[];
}

export type ModalData =
  | TouristSpotModal
  | ShoreExcursionModal
  | ShipInfoModal
  | CruiseAtSeaModal
  | InfoModal;

// ─── Day Schedule ───

export interface DayScheduleData {
  day: number;
  date: string;
  location: string;
  description: string;
  items: TimelineItem[];
}

// ─── Section Data Types ───

export interface HeroData {
  cruiseLine: string;
  departureDate: string;
  duration: string;
  nights: string;
  description: string;
  mobileDescription?: string;
  videoSources: { src: string; type: string }[];
  mobileVideoSrc?: string;
  posterImage?: string;
}

export interface FlightLeg {
  airline: string;
  flightCode?: string;
  departureTime: string;
  departureDate: string;
  arrivalTime: string;
  arrivalDate: string;
  duration: string;
}

export interface TripInfoData {
  subtitle?: string;
  flights: {
    outbound: FlightLeg[];
    inbound: FlightLeg[];
  };
  routeCities: string[];
  reservationStatus: string;
  reservationCount: string;
  escortInfo: string;
  meetingPlace: string;
}

export interface FacilityData {
  name: string;
  images: string[];
  alt: string;
  subtitle: string;
  description: string;
}

export interface IntroData {
  facilities: FacilityData[];
}

export interface AmenityData {
  iconName: string;
  label: string;
  fullWidth?: boolean;
}

export interface RoomFeature {
  name: string;
  image: string;
  subtitle: string;
  description: string;
  amenities: AmenityData[];
}

export interface FeaturesData {
  rooms: RoomFeature[];
}

export interface ShipSpec {
  label: string;
  value: string;
}

export interface DetailsData {
  specs: ShipSpec[];
  youtube: {
    videoId: string;
    startSeconds: number;
    endSeconds: number;
  };
}

export interface SpotData {
  name: string;
  description: string;
  image: string;
}

export interface TouristSpotsData {
  spots: SpotData[];
}

export interface ScheduleData {
  days: DayScheduleData[];
  modals: ModalData[];
  dateRange: string;
  durationLabel: string;
}

export interface RoomTabPrice {
  key: string;
  label: string;
  prices: { adult: string; child: string; infant: string };
}

export interface PricingInfoSection {
  title: string;
  items: string[];
}

export interface PricingData {
  roomTabs: RoomTabPrice[];
  personOptions: number[];
  fuelSurcharge: number;
  fuelSurchargeText: string;
  localGuideFee: { amount: number; currency: string };
  crewTip: { adult: { amount: number; currency: string }; child: { amount: number; currency: string } };
  notices: string[];
  infoSections: PricingInfoSection[];
}

export interface ProductInfoData {
  includedItems: string[];
  excludedItems: string[];
}

export interface NoticeItem {
  text: string;
  subItems?: string[];
}

export interface TripSummaryData {
  cancellationItems: string[];
  importantNotices: NoticeItem[];
}

export interface ChecklistCategory {
  title: string;
  items: string[];
}

export interface ChecklistData {
  categories: ChecklistCategory[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface HeaderData {
  companyName: string;
  logoPath?: string;
  logoDarkPath?: string;
  mobileTitle?: string;
  navItems: NavItem[];
}

export interface FooterData {
  companyName: string;
  description: string;
  logoPath?: string;
  copyright?: string;
  phone: string;
  email: string;
  hours: string;
  address: string;
  quickLinks: { label: string; href: string }[];
}

export interface MobileBottomBarData {
  phoneNumber: string;
  kakaoUrl: string;
  businessHours: string;
}

// ─── Root Data Type ───

export interface CruisePackageData {
  hero: HeroData;
  tripInfo: TripInfoData;
  intro: IntroData;
  features: FeaturesData;
  details: DetailsData;
  touristSpots: TouristSpotsData;
  schedule: ScheduleData;
  pricing: PricingData;
  productInfo: ProductInfoData;
  tripSummary: TripSummaryData;
  checklist: ChecklistData;
  header: HeaderData;
  footer: FooterData;
  mobileBottomBar: MobileBottomBarData;
}
