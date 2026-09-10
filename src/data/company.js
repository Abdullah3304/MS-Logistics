/**
 * MS Logistics — site constants
 * Replace these values when the customer provides final details.
 */
export const company = {
  name: "MS Logistics",
  tagline: "Driven to Deliver",
  founded: 2026,
  location: "Houston, TX",
  headline: "Reliable Freight Transportation — Texas & Nationwide",
  subheadline:
    "Flexible capacity for spot freight, dedicated lanes, recurring routes, overflow support, and long-term transportation contracts.",
  message:
    "MS Logistics provides dependable freight transportation and is actively available for spot freight, recurring routes, dedicated lanes, overflow capacity, and long-term contract partnerships.",

  // --- Replace with customer-provided values ---
  phone: "(786) 969-0265",
  email: "info@mslogisticsus.com",
  address: "725 FM 1959 RD, Houston, TX 77034",
  hours: "Mon–Fri 7:00 AM – 7:00 PM CT",
  gpsTracking: true,
};

/** Digits-only tel: href from a display phone number */
export function phoneHref(phone) {
  let digits = String(phone || "").replace(/\D/g, "");
  if (digits.length === 10) digits = `1${digits}`;
  return digits ? `tel:+${digits}` : "tel:";
}

export const trustItems = [
  "Insured",
  "24/7 GPS Tracking",
  "Dispatch Support",
];

export const sellingPoints = [
  "Responsive dispatch communication",
  "Shipment visibility and status updates",
  "Fast proof-of-delivery process",
  "Flexible spot and recurring capacity",
];

export const customerNeeds = [
  "Scheduled transportation",
  "Expedited and time-sensitive freight",
  "Distribution and warehouse transfers",
  "Seasonal and overflow coverage",
];

export const transportationServices = [
  {
    title: "Dedicated Transportation",
    copy: "Reserved capacity aligned to your lanes, windows, and operational cadence.",
  },
  {
    title: "Contract Freight",
    copy: "Structured agreements for predictable volume and long-term lane stability.",
  },
  {
    title: "Full Truckload",
    copy: "Direct FTL moves with clear handoffs and accountable transit performance.",
  },
  {
    title: "Expedited Freight",
    copy: "Time-sensitive shipments when schedule integrity matters most.",
  },
  {
    title: "Regional and OTR Transportation",
    copy: "Texas regional coverage with nationwide over-the-road reach.",
  },
];

export const capacitySolutions = [
  "Daily or weekly routes",
  "Recurring lanes",
  "Overflow and surge support",
  "Plant-to-warehouse moves",
  "Warehouse-to-store replenishment",
];

export const equipment = [
  {
    id: "box-26",
    name: "26-Foot Box Truck",
    serviceType:
      "Palletized freight, expedited shipments, retail replenishment, distribution transfers",
    coverage: "Houston metro · Texas regional · Nationwide lanes",
    dimensions: '26\' box · ~1,400–1,800 cu ft · up to ~10,000 lbs',
    liftgate: "Liftgate available",
    confirmed: true,
    image: "/images/fleet-box-truck.jpg",
  },
  {
    id: "dry-van",
    name: "Dry Van",
    serviceType:
      "General freight, manufacturing, retail, and full-truckload lanes",
    coverage: "Texas regional · OTR nationwide",
    dimensions: "53' dry van · ~3,800 cu ft · up to ~45,000 lbs",
    liftgate: "Swing Doors (dock / ground load)",
    confirmed: true,
    image: "/images/fleet-dry-van.jpg",
  },
  {
    id: "reefer",
    name: "Reefer",
    serviceType: "Temperature-controlled freight",
    coverage: "Texas regional · OTR nationwide",
    dimensions: "53' reefer · temp-controlled · up to ~45,000 lbs",
    liftgate: "Swing Door (dock load)",
    confirmed: true,
    image: "/images/fleet-reefer.jpg",
  },
  {
    id: "flatbed",
    name: "Flatbed",
    serviceType: "Machinery, building materials, and industrial freight",
    coverage: "Houston · Texas · Regional / OTR",
    dimensions: "48' flatbed · up to ~48,000 lbs",
    liftgate: "N/A — tarps & straps available",
    confirmed: true,
    image: "/images/fleet-flatbed.jpg",
  },
];

export const partnershipTypes = [
  {
    title: "Shippers",
    copy: "Move production, retail, and distribution freight with a responsive capacity partner.",
  },
  {
    title: "Brokers",
    copy: "Reliable coverage for spot freight and surge demand when your network needs backup.",
  },
  {
    title: "3PLs",
    copy: "Extend warehouse and fulfillment networks with dependable plant-to-DC and DC-to-store moves.",
  },
  {
    title: "Dedicated Routes",
    copy: "Build recurring weekly lanes and long-term agreements around your operating calendar.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet & Capacity" },
  { to: "/partnerships", label: "Contract Partnerships" },
  { to: "/about", label: "About" },
  { to: "/quote", label: "Request a Quote" },
  { to: "/contact", label: "Contact" },
];
