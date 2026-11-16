
export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  demo: boolean;
};

export const projects: Project[] = [
  // ==========================================
  // FASHION & RETAIL BRANDS
  // ==========================================

  {
    id: "activ-sportswear",
    name: "ACTIV Sportswear",
    category: "متاجر إلكترونية",
    description:
      "القاهرة، مصر. دراسة Showcase مقترحة لمنصة تجارة إلكترونية متكاملة للملابس والمستلزمات الرياضية، تشمل تصنيفات المنتجات، البحث المتقدم، إدارة المخزون، سلة المشتريات، بوابات الدفع، وتجربة تسوق متوافقة مع الهواتف. الموقع الرسمي: https://activ.eg/",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=90",
    alt: "ACTIV Sportswear - Sports Fashion E-commerce Showcase",
    demo: false,
  },
  {
    id: "town-team",
    name: "Town Team",
    category: "متاجر إلكترونية",
    description:
      "القاهرة، مصر. دراسة Showcase مقترحة لمتجر أزياء متكامل، مع كتالوج ديناميكي للمنتجات، فلاتر المقاسات والألوان، إدارة العروض، نظام الطلبات، ولوحة تحكم للمبيعات والمخزون. رابط الموقع الرسمي: لم يتم التحقق منه.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90",
    alt: "Town Team - Fashion Retail Website Showcase",
    demo: false,
  },
  {
    id: "remas-land",
    name: "Remas Land",
    category: "مواقع شركات",
    description:
      "مصر. دراسة Showcase مقترحة لموقع مؤسسي احترافي يعرض العلامة التجارية وخدماتها ومنتجاتها، مع نظام إدارة محتوى، صفحات تعريفية، معرض صور، ونموذج تواصل متصل بلوحة الإدارة. رابط الموقع الرسمي: لم يتم التحقق منه.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    alt: "Remas Land - Corporate Website Showcase",
    demo: false,
  },
  {
    id: "obour-land",
    name: "Obour Land",
    category: "مواقع شركات",
    description:
      "مدينة العبور، القليوبية، مصر. دراسة Showcase مقترحة لموقع مؤسسي لشركة أغذية، تتضمن عرض المنتجات والفئات الغذائية، صفحات العلامات التجارية، بيانات التوزيع، نموذج التواصل، ونظام إدارة محتوى قابل للتوسع. الموقع الرسمي: https://www.obourland.com/",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=90",
    alt: "Obour Land - Food Industry Corporate Website Showcase",
    demo: false,
  },

  // ==========================================
  // CAIRO RESTAURANTS
  // ==========================================

  {
    id: "sachi",
    name: "Sachi",
    category: "حجوزات",
    description:
      "هليوبوليس، القاهرة، مصر. دراسة Showcase مقترحة لموقع مطعم فاخر يقدم تجربة متوسطية وآسيوية، تشمل عرض قائمة الطعام، معرض صور احترافي، نظام حجز الطاولات، اختيار الفروع، وتكامل التواصل. الموقع الرسمي: https://www.sachirestaurant.com/",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Sachi Cairo - Fine Dining Restaurant Showcase",
    demo: false,
  },
  {
    id: "kazoku",
    name: "Kazoku",
    category: "حجوزات",
    description:
      "سوان ليك، القاهرة الجديدة، مصر. دراسة Showcase مقترحة لمطعم ياباني وآسيوي راقٍ، تتضمن نظام حجز إلكتروني، قوائم طعام تفاعلية، صفحات المناسبات، معرض صور، وإدارة طلبات الحجز. الموقع الرسمي: https://kazokuegypt.com/",
    image:
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=1600&q=90",
    alt: "Kazoku - Japanese Restaurant Digital Experience",
    demo: false,
  },
  {
    id: "koshary-abou-tarek",
    name: "Koshary Abou Tarek",
    category: "خدمات رقمية",
    description:
      "وسط البلد، القاهرة، مصر. دراسة Showcase مقترحة لمنصة مطعم متخصص في الكشري، تشمل قائمة إلكترونية، نظام طلبات الطعام، تحديد الفروع، متابعة الطلبات، وربط قنوات التواصل وخدمات التوصيل. الموقع الرسمي: https://www.koshary-aboutarek.com/",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=90",
    alt: "Koshary Abou Tarek - Restaurant Ordering Showcase",
    demo: false,
  },
  {
    id: "zooba",
    name: "Zooba",
    category: "خدمات رقمية",
    description:
      "الزمالك، القاهرة، مصر، مع فروع أخرى. دراسة Showcase مقترحة لمنصة مطاعم للأطعمة المصرية الحديثة، تتضمن كتالوج وجبات، واجهة طلب سريعة، عرض الفروع، تجربة Mobile First، وتكامل أنظمة الطلبات والتوصيل. الموقع الرسمي: لم يتم التحقق من عنوانه الحالي.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=90",
    alt: "Zooba - Modern Egyptian Street Food Showcase",
    demo: false,
  },
  {
    id: "zitouni",
    name: "Zitouni",
    category: "حجوزات",
    description:
      "فندق فورسيزونز نايل بلازا، جاردن سيتي، القاهرة، مصر. دراسة Showcase مقترحة لموقع مطعم يقدم المأكولات المصرية، مع قوائم طعام رقمية، عرض الأطباق، نظام حجز الطاولات، صفحات المناسبات، وتكامل معلومات المطعم. الموقع الرسمي: https://www.fourseasons.com/caironp/dining/restaurants/zitouni/",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
    alt: "Zitouni - Four Seasons Egyptian Restaurant Showcase",
    demo: false,
  },
  {
    id: "revolving-restaurant",
    name: "Revolving Restaurant",
    category: "حجوزات",
    description:
      "جاردن سيتي، القاهرة، مصر. دراسة Showcase مقترحة لمطعم دوار بإطلالات بانورامية، تشمل عرض تجربة المطعم، معرض صور، قوائم الطعام، نظام حجز إلكتروني، وإدارة مواعيد الزيارات والمناسبات. رابط الموقع الرسمي: لم يتم التحقق منه.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90",
    alt: "The Revolving Restaurant - Panoramic Dining Showcase",
    demo: false,
  },
  {
    id: "al-khal",
    name: "Al Khal",
    category: "خدمات رقمية",
    description:
      "القاهرة، مصر. دراسة Showcase مقترحة لموقع مطعم، تتضمن عرض قائمة الطعام، تصنيفات الوجبات، معرض صور، معلومات الفروع، نظام استقبال الطلبات، ونموذج تواصل مباشر. الموقع الرسمي: لم يتم التحقق من عنوانه.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=90",
    alt: "Al Khal Egyptian Restaurant - Digital Showcase",
    demo: false,
  },
  {
    id: "abou-el-sid",
    name: "Abou El Sid",
    category: "حجوزات",
    description:
      "الزمالك، القاهرة، مصر. دراسة Showcase مقترحة لمطعم يقدم المطبخ المصري التقليدي، مع تصميم يعكس الهوية التراثية، قائمة طعام رقمية، نظام حجز الطاولات، صفحات الفروع، ومعرض صور احترافي. الموقع الرسمي: http://www.abouelsid.com/",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1600&q=90",
    alt: "Abou El Sid - Traditional Egyptian Restaurant Showcase",
    demo: false,
  },
  {
    id: "crimson",
    name: "Crimson Bar & Grill",
    category: "حجوزات",
    description:
      "الزمالك، القاهرة، مصر. دراسة Showcase مقترحة لمطعم وروفتوب بإطلالة على النيل، تتضمن تصميم تجربة بصرية فاخرة، عرض قائمة الطعام، معرض الصور، نظام الحجوزات، وصفحات الفعاليات والمناسبات. الموقع الرسمي: https://www.crimsoncairo.com/",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=90",
    alt: "Crimson Bar and Grill - Zamalek Restaurant Showcase",
    demo: false,
  },
  {
    id: "felfela",
    name: "Felfela",
    category: "خدمات رقمية",
    description:
      "وسط البلد، القاهرة، مصر، وفروع أخرى بالقاهرة والجيزة. دراسة Showcase مقترحة لمطعم مصري عريق، تشمل قائمة طعام تفاعلية، دليل الفروع، نظام طلبات وتوصيل، إدارة المحتوى، وتجربة متوافقة مع جميع الأجهزة. الموقع الرسمي: https://felfela.com/",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    alt: "Felfela - Egyptian Restaurant Digital Experience",
    demo: false,
  },
];
