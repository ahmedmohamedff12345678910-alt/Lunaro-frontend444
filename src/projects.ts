
export interface Project {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  category:
    | 'e-commerce'
    | 'restaurants'
    | 'corporate'
    | 'automotive'
    | 'beverage';
  categoryAr: string;
  categoryEn: string;
  activityAr: string;
  activityEn: string;
  descriptionAr: string;
  descriptionEn: string;
  coverImage: string;
  gallery: string[];
  officialWebsite?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'activ',
    slug: 'activ-sportswear',
    nameAr: 'أكتيف للملابس الرياضية',
    nameEn: 'ACTIV Sportswear',
    category: 'e-commerce',
    categoryAr: 'متجر إلكتروني',
    categoryEn: 'E-commerce',
    activityAr: 'الملابس الرياضية والأزياء',
    activityEn: 'Sportswear & Apparel',
    descriptionAr:
      'متجر متخصص في الملابس الرياضية، يقدم تجربة رقمية لعرض التشكيلات والمنتجات والتصنيفات الخاصة بالعلامة التجارية.',
    descriptionEn:
      'A sportswear retail brand with a digital shopping experience showcasing its apparel collections and product categories.',
    coverImage: '/images/projects/Activ.jfif',
    gallery: ['/images/projects/Activ.jfif'],
    officialWebsite: 'https://activ.eg',
    featured: true,
  },
  {
    id: 'town-team',
    slug: 'town-team',
    nameAr: 'تاون تيم',
    nameEn: 'Town Team',
    category: 'e-commerce',
    categoryAr: 'متجر إلكتروني',
    categoryEn: 'E-commerce',
    activityAr: 'الملابس الشبابية والأزياء الرجالية',
    activityEn: 'Men’s Fashion & Casual Wear',
    descriptionAr:
      'علامة تجارية متخصصة في الأزياء الرجالية والشبابية، مع تجربة تسوق رقمية لعرض المنتجات والتشكيلات المختلفة.',
    descriptionEn:
      'A fashion brand specializing in men’s and casual wear, with a digital shopping experience for its collections.',
    coverImage: '/images/projects/TownTeam.jfif',
    gallery: ['/images/projects/TownTeam.jfif'],
    officialWebsite: 'https://townteam.com',
    featured: true,
  },
  {
    id: 'obour-land',
    slug: 'obour-land',
    nameAr: 'عبور لاند',
    nameEn: 'Obour Land',
    category: 'beverage',
    categoryAr: 'الأغذية والمشروبات',
    categoryEn: 'Food & Beverage',
    activityAr: 'منتجات الألبان والأجبان والأغذية',
    activityEn: 'Dairy, Cheese & Food Products',
    descriptionAr:
      'علامة تجارية مصرية متخصصة في الصناعات الغذائية ومنتجات الألبان، تشمل تشكيلتها الأجبان والمنتجات المصنعة والحليب والعصائر.',
    descriptionEn:
      'An Egyptian food manufacturer offering a diverse range of dairy and food products, including cheese, milk and juices.',
    coverImage: '/images/projects/ObourLand.jfif',
    gallery: ['/images/projects/ObourLand.jfif'],
    officialWebsite: 'https://obourland.com',
    featured: true,
  },
  {
    id: 'remas-land',
    slug: 'remas-land',
    nameAr: 'ريماس لاند',
    nameEn: 'Remas Land',
    category: 'beverage',
    categoryAr: 'الأغذية والمشروبات',
    categoryEn: 'Food & Beverage',
    activityAr: 'منتجات الألبان والأغذية',
    activityEn: 'Dairy & Food Products',
    descriptionAr:
      'علامة تجارية متخصصة في صناعة منتجات الألبان، تقدم مجموعة متنوعة من المنتجات الغذائية مع اهتمام بجودة التصنيع والتوزيع.',
    descriptionEn:
      'A dairy and food brand offering a range of products, with a focus on product quality, manufacturing and distribution.',
    coverImage: '/images/projects/RemasLand.jfif',
    gallery: ['/images/projects/RemasLand.jfif'],
    officialWebsite: 'https://remaslandeg.com',
    featured: true,
  },
  {
    id: 'kadoura',
    slug: 'kadoura-seafood',
    nameAr: 'أسماك قدورة',
    nameEn: 'Kadoura Seafood',
    category: 'restaurants',
    categoryAr: 'مطاعم وأغذية',
    categoryEn: 'Restaurants & Food',
    activityAr: 'مطعم مأكولات بحرية',
    activityEn: 'Seafood Restaurant',
    descriptionAr:
      'مطعم متخصص في المأكولات البحرية، يقدم تجربة طعام متنوعة مع قائمة من الأصناف البحرية ومعلومات الفروع والتواصل.',
    descriptionEn:
      'A seafood restaurant showcasing a variety of seafood dishes, restaurant information and branch details.',
    coverImage: '/images/projects/Kadoura.jfif',
    gallery: ['/images/projects/Kadoura.jfif'],
    officialWebsite: 'https://kadoura.com',
    featured: true,
  },
  {
    id: 'el-abd',
    slug: 'el-abd-patisserie',
    nameAr: 'حلواني العبد',
    nameEn: 'El Abd Patisserie',
    category: 'restaurants',
    categoryAr: 'مطاعم وأغذية',
    categoryEn: 'Restaurants & Food',
    activityAr: 'الحلويات والمخبوزات',
    activityEn: 'Sweets & Bakery',
    descriptionAr:
      'علامة تجارية متخصصة في الحلويات والمخبوزات، تقدم تشكيلة متنوعة من المنتجات الشرقية والغربية والمخبوزات.',
    descriptionEn:
      'A well-known confectionery and bakery brand offering a variety of oriental sweets, western desserts and baked goods.',
    coverImage: '/images/projects/ElAbd.jfif',
    gallery: ['/images/projects/ElAbd.jfif'],
    officialWebsite: 'https://elabdfoods.com',
    featured: true,
  },
  {
    id: 'abou-shakra',
    slug: 'abou-shakra',
    nameAr: 'مطعم أبو شقرة',
    nameEn: 'Abou Shakra',
    category: 'restaurants',
    categoryAr: 'مطاعم وأغذية',
    categoryEn: 'Restaurants & Food',
    activityAr: 'المشويات والمأكولات المصرية',
    activityEn: 'Egyptian Grills & Cuisine',
    descriptionAr:
      'علامة مطاعم متخصصة في المشويات والمأكولات المصرية، مع عرض هوية المطعم وقائمة الطعام ومعلومات الفروع.',
    descriptionEn:
      'An Egyptian restaurant brand specializing in grilled dishes and local cuisine, showcasing its menu and restaurant information.',
    coverImage: '/images/projects/AbouShakra.jfif',
    gallery: ['/images/projects/AbouShakra.jfif'],
    officialWebsite: 'https://aboushakragroup.com',
    featured: true,
  },
  {
    id: 'fit-and-fix',
    slug: 'fit-and-fix',
    nameAr: 'فيت آند فيكس',
    nameEn: 'Fit & Fix',
    category: 'automotive',
    categoryAr: 'السيارات والخدمات',
    categoryEn: 'Automotive & Services',
    activityAr: 'خدمات السيارات والصيانة والعناية',
    activityEn: 'Automotive Maintenance & Care',
    descriptionAr:
      'علامة متخصصة في خدمات السيارات، تشمل الصيانة والعناية بالإطارات وخدمات العناية بالمركبات.',
    descriptionEn:
      'An automotive service brand offering vehicle maintenance, tyre care and related automotive services.',
    coverImage: '/images/projects/FitAndFix.jfif',
    gallery: ['/images/projects/FitAndFix.jfif'],
    officialWebsite: 'https://fitandfix.com',
    featured: true,
  },
  {
    id: 'brothers-care',
    slug: 'brothers-care',
    nameAr: 'برازرز كير',
    nameEn: 'Brothers Care',
    category: 'automotive',
    categoryAr: 'السيارات والخدمات',
    categoryEn: 'Automotive & Services',
    activityAr: 'منتجات العناية بالسيارات والتنظيف',
    activityEn: 'Car Care & Cleaning Products',
    descriptionAr:
      'متجر متخصص في منتجات ومستلزمات العناية بالسيارات، بما يشمل منتجات التنظيف والتلميع ومعدات العناية بالمركبات.',
    descriptionEn:
      'A specialized store offering car care products, cleaning supplies, detailing accessories and vehicle care equipment.',
    coverImage: '/images/projects/BrothersCare.jfif',
    gallery: ['/images/projects/BrothersCare.jfif'],
    officialWebsite: 'https://brothers.care',
    featured: true,
  },
  {
    id: 'al-hassan',
    slug: 'al-hassan-contracting',
    nameAr: 'الحسن للمقاولات',
    nameEn: 'Al Hassan Contracting',
    category: 'corporate',
    categoryAr: 'مواقع الشركات',
    categoryEn: 'Corporate Websites',
    activityAr: 'المقاولات والتشطيبات والخدمات الهندسية',
    activityEn: 'Contracting, Finishing & Engineering',
    descriptionAr:
      'شركة متخصصة في المقاولات والتشطيبات والخدمات الهندسية، مع عرض خدمات الشركة ومجالات عملها ومعلومات التواصل.',
    descriptionEn:
      'A contracting and engineering company specializing in construction and finishing services, presenting its services and company information.',
    coverImage: '/images/projects/AlHassan.jfif',
    gallery: ['/images/projects/AlHassan.jfif'],
    officialWebsite: 'https://alhassancon.com',
    featured: true,
  },
  {
    id: 'method',
    slug: 'method-agency',
    nameAr: 'ميثود',
    nameEn: 'Method',
    category: 'corporate',
    categoryAr: 'مواقع الشركات',
    categoryEn: 'Corporate Websites',
    activityAr: 'التسويق والخدمات الرقمية وتصميم المواقع',
    activityEn: 'Digital Marketing & Web Design',
    descriptionAr:
      'شركة متخصصة في التسويق والخدمات الرقمية وتصميم المواقع، تعرض خدماتها وحلولها الرقمية ومعلومات التواصل.',
    descriptionEn:
      'A digital services company focused on marketing and web design, presenting its services and digital solutions.',
    coverImage: '/images/projects/Method.jfif',
    gallery: ['/images/projects/Method.jfif'],
    officialWebsite: 'https://method.com.eg',
    featured: true,
  },
  {
    id: 'spiro-spathis',
    slug: 'spiro-spathis',
    nameAr: 'سبيرو سباتس',
    nameEn: 'Spiro Spathis',
    category: 'beverage',
    categoryAr: 'الأغذية والمشروبات',
    categoryEn: 'Food & Beverage',
    activityAr: 'المشروبات الغازية والنكهات المتنوعة',
    activityEn: 'Soft Drinks & Flavored Beverages',
    descriptionAr:
      'علامة مصرية عريقة في صناعة المشروبات الغازية، تجمع بين تاريخ طويل من صناعة المشروبات وتشكيلة متنوعة من النكهات.',
    descriptionEn:
      'A historic Egyptian soft drink brand with a long heritage in beverage production and a variety of distinctive flavors.',
    coverImage: '/images/projects/SpiroSpathis.jfif',
    gallery: ['/images/projects/SpiroSpathis.jfif'],
    officialWebsite: 'https://www.spirospathis.com',
    featured: true,
  },
  {
    id: 'sachi',
    slug: 'sachi-restaurant',
    nameAr: 'ساشي',
    nameEn: 'Sachi',
    category: 'restaurants',
    categoryAr: 'مطاعم وأغذية',
    categoryEn: 'Restaurants & Food',
    activityAr: 'مطعم للمأكولات المتوسطية والآسيوية',
    activityEn: 'Mediterranean & Asian Restaurant',
    descriptionAr:
      'علامة مطاعم راقية تقدم تجربة طعام تجمع بين النكهات المتوسطية والآسيوية، مع اهتمام بتفاصيل الضيافة والأجواء.',
    descriptionEn:
      'A fine dining restaurant brand combining Mediterranean and Asian culinary influences with a distinctive hospitality experience.',
    coverImage: '/images/projects/Sachi.jfif',
    gallery: ['/images/projects/Sachi.jfif'],
    officialWebsite: 'https://www.sachirestaurant.com',
    featured: true,
  },
  {
    id: 'kazoku',
    slug: 'kazoku-restaurant',
    nameAr: 'كازوكو',
    nameEn: 'Kazoku',
    category: 'restaurants',
    categoryAr: 'مطاعم وأغذية',
    categoryEn: 'Restaurants & Food',
    activityAr: 'مطعم للمأكولات اليابانية',
    activityEn: 'Japanese Restaurant',
    descriptionAr:
      'علامة مطاعم تقدم تجربة طعام يابانية معاصرة، وتركز على الأطباق اليابانية وأجواء تناول الطعام المميزة.',
    descriptionEn:
      'A contemporary Japanese dining concept focused on Japanese cuisine and a distinctive restaurant atmosphere.',
    coverImage: '/images/projects/Kazoku.jfif',
    gallery: ['/images/projects/Kazoku.jfif'],
    officialWebsite: 'https://www.kazokuegypt.com',
    featured: true,
  },
];
