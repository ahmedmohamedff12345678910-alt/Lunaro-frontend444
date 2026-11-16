export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  url?: string;
  demo?: boolean;
}

export const projects: Project[] = [
  {
    id: 'activ-ecommerce',
    name: 'ACTIV Sportswear — متجر أكتف للملابس الرياضية',
    category: 'متاجر إلكترونية',
    description: 'تطوير منصة تجارة إلكترونية متكاملة ثنائية اللغة (عربي/إنجليزي) لعلامة ACTIV، مع حل تحديات التخزين المؤقت للـ SKUs عالية الكثافة وتسريع إتمام الطلب عبر الجوال أثناء ذروة التخفيضات. الموقع الرسمي: https://activ.eg',
    image: 'https://unsplash.com',
    alt: 'منصة التجارة الإلكترونية لمتجر ACTIV للملابس والأحذية الرياضية',
    url: 'https://activ.eg',
    demo: false
  },
  {
    id: 'town-team-menswear',
    name: 'Town Team — متجر تاون تيم للأزياء الرجالية',
    category: 'متاجر إلكترونية',
    description: 'هندسة وتطوير متجر الأزياء الرجالية الرائد لعلامة Town Team، مع بناء نظام مزامنة لحظي للمخزون بين أكثر من 220 فرعاً وضمان استقرار الخوادم خلال عروض الجمعة البيضاء. الموقع الرسمي: https://townteam.com',
    image: 'https://unsplash.com',
    alt: 'متجر Town Team الإلكتروني للأزياء الرجالية الكاجوال',
    url: 'https://townteam.com',
    demo: false
  },
  {
    id: 'remas-land-dairy',
    name: 'Remas Land — منصة ومصنع ريماس لاند للألبان',
    category: 'متاجر إلكترونية',
    description: 'بناء منصة رقمية موحدة تجمع بين الموقع التعريفي للشركة ومتجر البيع المباشر لمنتجات الألبان والحلويات، مع ربط أكثر من 55 فرعاً ومؤشرات توفر المخزون الطازج لحظياً. الموقع الرسمي: https://remaslandeg.com',
    image: 'https://unsplash.com',
    alt: 'منصة ريماس لاند الرقمية ومتجر منتجات الألبان',
    url: 'https://remaslandeg.com',
    demo: false
  },
  {
    id: 'obour-land-enterprise',
    name: 'Obour Land — بوابة عبور لاند المؤسسية وعلاقات المستثمرين',
    category: 'مواقع شركات',
    description: 'تطوير البوابة المؤسسية وكتالوج المنتجات وقسم علاقات المستثمرين لشركة عبور لاند للصناعات الغذائية، مع فهرسة ذكية للتقارير المالية وتجربة تصفح سريعة ثنائية اللغة. الموقع الرسمي: https://obourland.com',
    image: 'https://unsplash.com',
    alt: 'البوابة المؤسسية وعلاقات المستثمرين لشركة عبور لاند',
    url: 'https://obourland.com',
    demo: false
  },
  {
    id: 'sachi-restaurants',
    name: 'سوتشي (Sachi) — مصر الجديدة وبارك ستريت الشيخ زايد',
    category: 'حجوزات',
    description: 'منصة رقمية فاخرة وتجربة حجز طاولات واستعراض قوائم الطعام لمطاعم Sachi في مصر الجديدة وبارك ستريت (الشيخ زايد)، القاهرة، المصنف ضمن أفضل 50 مطعماً في الشرق الأوسط. الرابط: https://sachirestaurant.com',
    image: 'https://unsplash.com',
    alt: 'واجهة منصة مطاعم سوتشي Sachi في القاهرة',
    url: 'https://sachirestaurant.com',
    demo: false
  },
  {
    id: 'kazoku-cairo',
    name: 'كازوكو (Kazoku) — سوان ليك القاهرة الجديدة',
    category: 'حجوزات',
    description: 'واجهة رقمية تفاعلية ونظام حجز تجارب الطعام اليابانية المعاصرة لمطعم Kazoku في كمبوند سوان ليك، القاهرة، بتصميم يعكس الفخامة والهوية البصرية الهادئة. الرابط: https://kazokuegypt.com',
    image: 'https://unsplash.com',
    alt: 'منصة مطعم كازوكو Kazoku في سوان ليك القاهرة',
    url: 'https://kazokuegypt.com',
    demo: false
  },
  {
    id: 'koshary-abou-tarek',
    name: 'كشري أبو طارق (Koshary Abou Tarek) — وسط البلد القاهرة',
    category: 'متاجر إلكترونية',
    description: 'موقع تعريفي ونظام طلبات أونلاين سريع لسلسلة مطاعم كشري أبو طارق الشهيرة في وسط البلد، القاهرة، مع عرض الفروع والمنيو وتجربة طلب سلسة. الرابط: https://koshary-aboutarek.com',
    image: 'https://unsplash.com',
    alt: 'موقع ومنصة طلبات كشري أبو طارق في وسط البلد القاهرة',
    url: 'https://koshary-aboutarek.com',
    demo: false
  },
  {
    id: 'zooba-eats',
    name: 'زوبا (Zooba) — الزمالك وسيتي ستارز والمتحف المصري الكبير',
    category: 'متاجر إلكترونية',
    description: 'منصة طلبات رقمية وهوية تفاعلية عصرية لمطاعم زوبا للأكلات المصرية الشعبية في الزمالك وسيتي ستارز والمتحف المصري الكبير، القاهرة. الرابط: https://zoobaeats.com',
    image: 'https://unsplash.com',
    alt: 'منصة مطاعم زوبا Zooba في القاهرة',
    url: 'https://zoobaeats.com',
    demo: false
  },
  {
    id: 'zitouni-four-seasons',
    name: 'زيتوني (Zitouni) — فندق فورسيزونز نايل بلازا القاهرة',
    category: 'حجوزات',
    description: 'بوابة عرض قوائم الطعام المصرية الأصيلة وحجز البوفيه والطاولات المطلة على النيل لمطعم زيتوني في فندق فورسيزونز نايل بلازا، كورنيش النيل، القاهرة. الرابط: https://fourseasons.com',
    image: 'https://unsplash.com',
    alt: 'واجهة مطعم زيتوني في فندق فورسيزونز نايل بلازا القاهرة',
    url: 'https://fourseasons.com',
    demo: false
  },
  {
    id: 'revolving-restaurant-hilton',
    name: 'المطعم الدوار (Revolving Restaurant & Lounge) — هيلتون جراند نايل',
    category: 'حجوزات',
    description: 'تجربة رقمية راقية لاستعراض القوائم وحجز الطاولات البانورامية بزاوية 360 درجة في المطعم الدوار بالطابق 41 بفندق هيلتون القاهرة جراند نايل، كورنيش النيل. الرابط: https://hilton.com',
    image: 'https://unsplash.com',
    alt: 'واجهة المطعم الدوار في هيلتون القاهرة جراند نايل',
    url: 'https://hilton.com',
    demo: false
  },
  {
    id: 'al-khal-restaurant',
    name: 'مطعم الخال المصري (Al Khal) — إنتركونتيننتال سيتي ستارز',
    category: 'حجوزات',
    description: 'منصة رقمية وقائمة طعام تفاعلية بدون تلامس لمطعم الخال المصري الأصيل في فندق إنتركونتيننتال القاهرة سيتي ستارز، مصر الجديدة، القاهرة. الرابط: https://citystarshotels.com',
    image: 'https://unsplash.com',
    alt: 'منصة وقائمة مطعم الخال المصري في سيتي ستارز القاهرة',
    url: 'https://citystarshotels.com',
    demo: false
  },
  {
    id: 'abou-el-sid-zamalek',
    name: 'أبو السيد (Abou El Sid) — الزمالك القاهرة',
    category: 'خدمات رقمية',
    description: 'تجربة استعراض التراث المصري وقائمة الأطباق التقليدية وحجز الطاولات لمطعم أبو السيد العريق في الزمالك، القاهرة. الرابط: https://www.elmenus.com/cairo/abou-el-sid-595q',
    image: 'https://unsplash.com',
    alt: 'واجهة مطعم أبو السيد التراثي في الزمالك القاهرة',
    url: 'https://www.elmenus.com/cairo/abou-el-sid-595q',
    demo: false
  },
  {
    id: 'crimson-bar-grill',
    name: 'كريمسون (Crimson Bar & Grill) — الزمالك القاهرة',
    category: 'حجوزات',
    description: 'واجهة رقمية عصرية لعرض قائمة المشويات والإطلالة البانورامية على النيل ونظام الحجوزات لمطعم كريمسون في الزمالك، القاهرة. الرابط: https://www.crimsoncairo.com',
    image: 'https://unsplash.com',
    alt: 'واجهة مطعم كريمسون Crimson Bar & Grill في الزمالك القاهرة',
    url: 'https://www.crimsoncairo.com',
    demo: false
  },
  {
    id: 'felfela-downtown',
    name: 'فلفلة (Felfela) — وسط البلد القاهرة',
    category: 'خدمات رقمية',
    description: 'دليل رقمي وقائمة تفاعلية للأطباق المصرية التقليدية وتاريخ المطعم العريق لمطعم فلفلة في وسط البلد، القاهرة. الرابط: https://www.tripadvisor.com/Restaurant_Review-g294201-d786134-Reviews-Felfela-Cairo_Cairo_Governorate.html',
    image: 'https://unsplash.com',
    alt: 'واجهة مطعم فلفلة التاريخي في وسط البلد القاهرة',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g294201-d786134-Reviews-Felfela-Cairo_Cairo_Governorate.html',
    demo: false
  }
];
