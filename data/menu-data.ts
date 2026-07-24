export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
}

export interface Offer {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: number;
  originalPrice: number;
  image: string;
}

export const pancakes: MenuItem[] = [
  {
    id: "pancake-1",
    nameAr: "بان كيك شوكولاتة / كراميل",
    nameEn: "Chocolate / Caramel Pancake",
    descriptionAr: "بان كيك طازج مع صوص الشوكولاتة أو الكراميل اللذيذ",
    descriptionEn: "Fresh pancakes with delicious chocolate or caramel sauce",
    price: 50,
    category: "pancakes",
    image: "/images/pancake-chocolate.jpg",
  },
  {
    id: "pancake-2",
    nameAr: "أوريو بان كيك",
    nameEn: "Oreo Pancake",
    descriptionAr: "بان كيك مع قطع الأوريو وصوص الشوكولاتة المنفصل",
    descriptionEn: "Pancakes with Oreo pieces and separate chocolate sauce",
    price: 60,
    category: "pancakes",
    image: "/images/pancake-oreo.jpg",
    badge: "Popular",
  },
  {
    id: "pancake-3",
    nameAr: "لوتس بان كيك",
    nameEn: "Lotus Pancake",
    descriptionAr: "بان كيك فاخر مع صوص اللوتس والكريمة الطازجة",
    descriptionEn: "Premium pancakes with Lotus sauce and fresh cream",
    price: 65,
    category: "pancakes",
    image: "/images/pancake-lotus.jpg",
    badge: "Premium",
  },
  {
    id: "pancake-4",
    nameAr: "ميكس بان كيك",
    nameEn: "Mix Pancake",
    descriptionAr: "تجربة فريدة مع مزيج الشوكولاتة واللوتس والأوريو",
    descriptionEn: "Unique experience with chocolate, lotus & oreo mix",
    price: 70,
    category: "pancakes",
    image: "/images/pancake-mix.jpg",
    badge: "Best Seller",
  },
];

export const addons: MenuItem[] = [
  {
    id: "addon-1",
    nameAr: "صوص إضافي",
    nameEn: "Extra Sauce",
    descriptionAr: "شوكولاتة، كراميل، أو لوتس",
    descriptionEn: "Chocolate, caramel, or lotus",
    price: 10,
    category: "addons",
    image: "/images/sauce.jpg",
  },
  {
    id: "addon-2",
    nameAr: "فواكه طازجة",
    nameEn: "Fresh Fruits",
    descriptionAr: "تشكيلة من الفواكه الطازجة الموسمية",
    descriptionEn: "Assortment of fresh seasonal fruits",
    price: 15,
    category: "addons",
    image: "/images/fruits.jpg",
  },
  {
    id: "addon-3",
    nameAr: "سكوب آيس كريم",
    nameEn: "Ice Cream Scoop",
    descriptionAr: "فانيليا، شوكولاتة، أو فراولة",
    descriptionEn: "Vanilla, chocolate, or strawberry",
    price: 20,
    category: "addons",
    image: "/images/icecream.jpg",
  },
];

export const drinks: MenuItem[] = [
  {
    id: "drink-1",
    nameAr: "أيس كوفي",
    nameEn: "Iced Coffee",
    descriptionAr: "قهوة مثلجة منعشة مع الحليب",
    descriptionEn: "Refreshing iced coffee with milk",
    price: 40,
    category: "drinks",
    image: "/images/iced-coffee.jpg",
  },
  {
    id: "drink-2",
    nameAr: "أيس شوكولاتة",
    nameEn: "Iced Chocolate",
    descriptionAr: "شوكولاتة باردة كريمية مع الكريمة المخفوقة",
    descriptionEn: "Creamy cold chocolate with whipped cream",
    price: 45,
    category: "drinks",
    image: "/images/iced-chocolate.jpg",
  },
  {
    id: "drink-3",
    nameAr: "مياه غازية (كانز)",
    nameEn: "Soft Drink (Can)",
    descriptionAr: "مشروب غازي بارد",
    descriptionEn: "Cold carbonated beverage",
    price: 25,
    category: "drinks",
    image: "/images/soda.jpg",
  },
];

export const boxes: MenuItem[] = [
  {
    id: "box-1",
    nameAr: "ميني بان كيك بوكس",
    nameEn: "Mini Pancake Box",
    descriptionAr: "20 قطعة بان كيك صغيرة مثالية للتشارك",
    descriptionEn: "20 mini pancake pieces perfect for sharing",
    price: 80,
    category: "boxes",
    image: "/images/mini-box.jpg",
  },
  {
    id: "box-2",
    nameAr: "بوكس العيلة",
    nameEn: "Family Box",
    descriptionAr: "40 قطعة + 2 صوص إضافي - مثالي للعائلة",
    descriptionEn: "40 pieces + 2 extra sauces - perfect for family",
    price: 135,
    category: "boxes",
    image: "/images/family-box.jpg",
    badge: "Family",
  },
  {
    id: "box-3",
    nameAr: "بوكس الصحاب",
    nameEn: "Friends Box",
    descriptionAr: "60 قطعة + 4 صوصات + إضافات قرمشة",
    descriptionEn: "60 pieces + 4 sauces + crunchy toppings",
    price: 190,
    category: "boxes",
    image: "/images/friends-box.jpg",
    badge: "Party",
  },
];

export const offers: Offer[] = [
  {
    id: "offer-1",
    nameAr: "عرض السعادة",
    nameEn: "Happiness Offer",
    descriptionAr: "أوريو بان كيك + أيس كوفي",
    descriptionEn: "Oreo Pancake + Iced Coffee",
    price: 90,
    originalPrice: 100,
    image: "/images/offer-happiness.jpg",
  },
  {
    id: "offer-2",
    nameAr: "عرض اللمة",
    nameEn: "Gathering Offer",
    descriptionAr: "2 بوكس عيلة + 2 لتر حاجة ساقعة",
    descriptionEn: "2 Family Boxes + 2L Cold Drink",
    price: 280,
    originalPrice: 320,
    image: "/images/offer-gathering.jpg",
  },
  {
    id: "offer-3",
    nameAr: "عرض روّق بالك",
    nameEn: "Chill Out Offer",
    descriptionAr: "ميكس بان كيك + أيس شوكولاتة",
    descriptionEn: "Mix Pancake + Iced Chocolate",
    price: 105,
    originalPrice: 115,
    image: "/images/offer-chill.jpg",
  },
];
