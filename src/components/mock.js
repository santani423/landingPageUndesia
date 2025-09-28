// Mock data for UNDESIA landing page
export const mockData = {
  // Navigation items
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Paket', href: '#packages' },
    { label: 'Demo', href: '#demo' },
    { label: 'Semua Undangan', href: '/themes' },
    { label: 'Testimonial', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' }
  ],

  // Hero section
  hero: {
    title: 'UNDESIA – Undangan Digital Modern & Eksklusif',
    subtitle: 'Solusi elegan untuk pernikahan, khitanan, ulang tahun, dan undangan video kreatif Anda.',
    ctaButtons: [
      { text: 'Buat Undangan Website', variant: 'primary' },
      { text: 'Pesan Undangan Video', variant: 'secondary' },
      { text: 'Lihat Semua Contoh Undangan', variant: 'outline' }
    ]
  },

  // Features section
  features: [
    {
      icon: 'Smartphone',
      title: 'Desain Responsif',
      description: 'Cocok di HP, tablet, PC'
    },
    {
      icon: 'Clock',
      title: 'Hitung Mundur Acara',
      description: 'Timer elegan'
    },
    {
      icon: 'MapPin',
      title: 'Peta Lokasi',
      description: 'Google Maps & Waze'
    },
    {
      icon: 'Users',
      title: 'RSVP & Buku Tamu',
      description: 'Konfirmasi hadir'
    },
    {
      icon: 'Camera',
      title: 'Galeri Foto & Video',
      description: 'Kenangan indah'
    },
    {
      icon: 'Music',
      title: 'Musik Latar Custom',
      description: 'Lagu favorit'
    },
    {
      icon: 'Share2',
      title: 'Share ke WhatsApp & Sosial Media',
      description: 'Mudah dibagikan'
    },
    {
      icon: 'Video',
      title: 'Live Streaming / Zoom Link',
      description: 'Untuk tamu jauh'
    },
    {
      icon: 'Gift',
      title: 'Gift Registry / QRIS',
      description: 'Hadiah digital praktis'
    },
    {
      icon: 'Play',
      title: 'Undangan Video Animasi',
      description: 'Eksklusif, modern',
      badge: 'NEW'
    }
  ],

  // Packages
  packages: [
    {
      name: 'Paket Ramah',
      price: 'Rp80K',
      description: 'Simple, cepat, hemat',
      features: [
        'Desain template pilihan',
        'Hitung mundur acara',
        'Peta lokasi',
        'RSVP sederhana',
        'Galeri foto (max 10)',
        'Musik latar',
        'Share WhatsApp'
      ],
      cta: 'Pesan Sekarang',
      popular: false
    },
    {
      name: 'Paket Favorit',
      price: 'Rp99K',
      description: 'Paling lengkap & terjangkau',
      features: [
        'Semua fitur Paket Ramah',
        'Buku tamu digital',
        'Galeri foto unlimited',
        'Live streaming link',
        'QRIS pembayaran',
        'Custom domain',
        'Support prioritas'
      ],
      cta: 'Pesan Sekarang',
      popular: true,
      badge: 'Best Seller'
    },
    {
      name: 'Paket Eksklusif',
      price: 'Rp1.200K–Rp1.500K',
      description: 'Full custom + undangan video animasi',
      features: [
        'Semua fitur Paket Favorit',
        'Desain 100% custom',
        'Undangan video animasi',
        'Revisi unlimited',
        'Konsultasi 1-on-1',
        'Premium support',
        'Bonus merchandise'
      ],
      cta: 'Pesan Sekarang',
      popular: false
    }
  ],

  // Demo samples
  demos: {
    website: [
      {
        title: 'Wedding Theme',
        description: 'Pastel gold elegant',
        category: 'Pernikahan',
        thumbnail: '/placeholder-wedding.jpg'
      },
      {
        title: 'Khitanan Theme',
        description: 'Hijau islami',
        category: 'Khitanan',
        thumbnail: '/placeholder-khitanan.jpg'
      },
      {
        title: 'Birthday Theme',
        description: 'Ceria balloons',
        category: 'Ulang Tahun',
        thumbnail: '/placeholder-birthday.jpg'
      }
    ],
    video: [
      {
        title: 'Wedding Video Invitation',
        description: 'Animated Gold Theme',
        category: 'Pernikahan',
        thumbnail: '/placeholder-wedding-video.jpg',
        videoUrl: '#'
      },
      {
        title: 'Khitanan Video Invitation',
        description: 'Islamic Green Theme',
        category: 'Khitanan',
        thumbnail: '/placeholder-khitanan-video.jpg',
        videoUrl: '#'
      },
      {
        title: 'Birthday Video Invitation',
        description: 'Colorful Celebration',
        category: 'Ulang Tahun',
        thumbnail: '/placeholder-birthday-video.jpg',
        videoUrl: '#'
      }
    ]
  },

  // Testimonials
  testimonials: [
    {
      name: 'Rina & Fajar',
      eventType: 'Wedding',
      text: 'UNDESIA membuat pernikahan kami terasa lebih eksklusif. Semua tamu mudah mengakses undangan digital kami.',
      avatar: '/placeholder-avatar1.jpg'
    },
    {
      name: 'Sari & Ahmad',
      eventType: 'Khitanan',
      text: 'Undangan video animasi untuk khitanan anak kami sangat berkesan. Keluarga yang jauh bisa ikut merasakan momen bahagia ini.',
      avatar: '/placeholder-avatar2.jpg'
    },
    {
      name: 'Maya & Budi',
      eventType: 'Birthday',
      text: 'Fitur QRIS dan buku tamu digital sangat memudahkan acara ulang tahun putri kami. Terima kasih UNDESIA!',
      avatar: '/placeholder-avatar3.jpg'
    },
    {
      name: 'Dewi & Rizki',
      eventType: 'Wedding',
      text: 'Desain yang elegan dan fitur lengkap membuat undangan pernikahan kami terlihat profesional dan mudah digunakan.',
      avatar: '/placeholder-avatar4.jpg'
    }
  ],

  // Contact information
  contact: {
    whatsapp: '+6285778674418',
    instagram: '@undesia.official',
    facebook: 'UNDESIA Official',
    email: 'hello@undesia.com'
  },

  // Gallery page extended data
  galleryData: {
    websiteInvitations: [
      // Wedding category
      {
        id: 1,
        title: 'Elegant Rose Gold',
        category: 'Pernikahan',
        style: 'Pastel Elegant',
        thumbnail: '/placeholder-wedding-1.jpg'
      },
      {
        id: 2,
        title: 'Classic Floral',
        category: 'Pernikahan',
        style: 'Vintage Classic',
        thumbnail: '/placeholder-wedding-2.jpg'
      },
      {
        id: 3,
        title: 'Modern Minimalist',
        category: 'Pernikahan',
        style: 'Clean Modern',
        thumbnail: '/placeholder-wedding-3.jpg'
      },
      // Khitanan category
      {
        id: 4,
        title: 'Islamic Green',
        category: 'Khitanan',
        style: 'Hijau Islami',
        thumbnail: '/placeholder-khitanan-1.jpg'
      },
      {
        id: 5,
        title: 'Gold Islamic',
        category: 'Khitanan',
        style: 'Emas Islami',
        thumbnail: '/placeholder-khitanan-2.jpg'
      },
      // Birthday category
      {
        id: 6,
        title: 'Colorful Balloons',
        category: 'Ulang Tahun',
        style: 'Ceria Balloons',
        thumbnail: '/placeholder-birthday-1.jpg'
      },
      {
        id: 7,
        title: 'Princess Theme',
        category: 'Ulang Tahun',
        style: 'Pink Princess',
        thumbnail: '/placeholder-birthday-2.jpg'
      }
    ],
    videoInvitations: [
      // Wedding videos
      {
        id: 1,
        title: 'Romantic Gold Animation',
        category: 'Pernikahan',
        style: 'Animated Gold Theme',
        thumbnail: '/placeholder-wedding-video-1.jpg',
        videoUrl: '#'
      },
      {
        id: 2,
        title: 'Floral Wedding Video',
        category: 'Pernikahan',
        style: 'Floral Animation',
        thumbnail: '/placeholder-wedding-video-2.jpg',
        videoUrl: '#'
      },
      // Khitanan videos
      {
        id: 3,
        title: 'Islamic Khitanan Video',
        category: 'Khitanan',
        style: 'Islamic Green Theme',
        thumbnail: '/placeholder-khitanan-video-1.jpg',
        videoUrl: '#'
      },
      // Birthday videos
      {
        id: 4,
        title: 'Happy Birthday Animation',
        category: 'Ulang Tahun',
        style: 'Colorful Celebration',
        thumbnail: '/placeholder-birthday-video-1.jpg',
        videoUrl: '#'
      }
    ]
  }
};