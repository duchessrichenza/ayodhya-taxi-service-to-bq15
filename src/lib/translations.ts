export type Language = 'en' | 'hi';

export type TranslationKeys = typeof translations.en;

// Helper type to get nested keys as dot-notation strings
type NestedKeys<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeys<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeys<TranslationKeys>;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      fleet: 'Our Fleet',
      tours: 'Tours',
      ayodhya: 'Ayodhya Darshan',
      varanasi: 'Varanasi Darshan',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Jai Shree Ram Tours & Travels',
      subtitle:
        'Your trusted taxi service in Ayodhya — comfortable, affordable, and reliable travel across Uttar Pradesh and beyond.',
      cta_book: 'Book Your Ride',
      cta_explore: 'Explore Tours',
      tagline: 'Pilgrimage • Sightseeing • Outstation • Airport Transfers',
    },
    about: {
      section_title: 'About Us',
      section_subtitle: 'Your Trusted Travel Partner in Ayodhya',
      description:
        'Jai Shree Ram Tours & Travels is a premier taxi and travel service based in the holy city of Ayodhya. We specialize in religious tours, local sightseeing, outstation travel, and event transportation across Uttar Pradesh and neighboring states.',
      owner_label: 'Founder & Owner',
      owner_name: 'Vishal Tiwari',
      owner_bio:
        'With years of experience in the travel and hospitality industry, Vishal Tiwari founded Jai Shree Ram Tours & Travels with a simple mission — to provide pilgrims and tourists visiting Ayodhya with safe, comfortable, and affordable transportation.',
      experience: '10+ Years of Experience',
      experience_desc:
        'Over a decade of serving pilgrims and tourists with dedication and care.',
      mission_title: 'Our Mission',
      mission_desc:
        'To make every journey a memorable and spiritually fulfilling experience by providing safe, clean, and punctual transportation services at honest prices.',
      values_title: 'Our Values',
      value_safety: 'Safety First',
      value_safety_desc:
        'Well-maintained vehicles and experienced, verified drivers for every trip.',
      value_honesty: 'Honest Pricing',
      value_honesty_desc:
        'Transparent per-km rates with no hidden charges. What we quote is what you pay.',
      value_comfort: 'Comfort & Cleanliness',
      value_comfort_desc:
        'Spotlessly clean, air-conditioned vehicles to make your journey pleasant.',
      value_reliability: 'Reliability',
      value_reliability_desc:
        'On-time pickups, well-planned routes, and 24/7 availability for your convenience.',
      happy_customers: 'Happy Customers',
      trips_completed: 'Trips Completed',
      years_experience: 'Years Experience',
      vehicles_in_fleet: 'Vehicles in Fleet',
    },
    services: {
      section_title: 'Our Services',
      section_subtitle: 'Comprehensive Travel Solutions for Every Need',
      local_title: 'Local Sightseeing',
      local_desc:
        'Explore the sacred sites of Ayodhya with our guided local sightseeing packages. Visit Ram Mandir, Hanuman Garhi, Kanak Bhawan, and more in comfort.',
      wedding_title: 'Wedding & Event Transport',
      wedding_desc:
        'Make your special occasions grander with our decorated car rental service. We provide well-maintained vehicles for weddings, engagements, and family events.',
      airport_title: 'Airport Pickup & Drop',
      airport_desc:
        'Hassle-free airport transfers to and from Lucknow (LKO), Varanasi (VNS), and Prayagraj airports. Timely pickups, flight tracking, and comfortable rides.',
      religious_title: 'Religious Tours',
      religious_desc:
        'Embark on spiritually enriching journeys to Ayodhya, Varanasi, Prayagraj, Mathura, Vrindavan, and other sacred destinations with our curated tour packages.',
      outstation_title: 'Outstation Travel',
      outstation_desc:
        'Travel beyond Ayodhya with our reliable outstation cab service. One-way and round-trip options available to all major cities in UP and across India.',
    },
    fleet: {
      section_title: 'Our Fleet',
      section_subtitle: 'Choose the Perfect Vehicle for Your Journey',
      per_km: 'per km',
      book_now: 'Book Now',
      features: 'Features',
      capacity: 'Capacity',
      passengers: 'passengers',
      ideal_for: 'Ideal For',
      innova: {
        name: 'Toyota Innova Crysta',
        rate: '₹17',
        capacity: '6-7',
        ideal: 'Family trips, religious tours, outstation travel',
        features: 'AC, spacious boot, reclining seats, charging points, music system',
      },
      ertiga: {
        name: 'Maruti Ertiga',
        rate: '₹14',
        capacity: '6',
        ideal: 'Group sightseeing, small families, airport transfers',
        features: 'AC, comfortable seating, ample legroom, music system',
      },
      dzire: {
        name: 'Maruti Swift Dzire',
        rate: '₹11',
        capacity: '4',
        ideal: 'Couples, small families, city travel',
        features: 'AC, comfortable sedan, good mileage, smooth ride',
      },
      wagonr: {
        name: 'Maruti WagonR',
        rate: '₹9',
        capacity: '4',
        ideal: 'Budget travel, local sightseeing, short trips',
        features: 'AC, compact & easy to park, economical, city-friendly',
      },
    },
    tours: {
      section_title: 'Outstation Tours',
      section_subtitle: 'Explore Beyond Ayodhya',
      from_ayodhya: 'From Ayodhya',
      distance: 'Distance',
      travel_time: 'Travel Time',
      starting_from: 'Starting from',
      prayagraj: {
        name: 'Prayagraj (Allahabad)',
        desc: 'Visit the holy Triveni Sangam, Anand Bhavan, Allahabad Fort, and Khusro Bagh. Perfect for a spiritual day trip from Ayodhya.',
        distance: '~160 km',
        time: '3–4 hours',
      },
      lucknow: {
        name: 'Lucknow',
        desc: 'Explore the city of Nawabs — Bara Imambara, Chota Imambara, Rumi Darwaza, Hazratganj, and the famous Lucknawi cuisine.',
        distance: '~135 km',
        time: '2.5–3 hours',
      },
      varanasi: {
        name: 'Varanasi (Kashi)',
        desc: 'Experience the spiritual heart of India — Kashi Vishwanath Temple, Ganga Aarti at Dashashwamedh Ghat, Sarnath, and the ancient ghats.',
        distance: '~200 km',
        time: '4–5 hours',
      },
      agra_mathura: {
        name: 'Agra – Mathura – Vrindavan',
        desc: 'Visit the Taj Mahal, Agra Fort, Krishna Janmabhoomi in Mathura, Banke Bihari Temple and Prem Mandir in Vrindavan.',
        distance: '~600 km',
        time: '9–10 hours',
      },
      outstation_title: 'Outstation Routes from Ayodhya',
      book_tour: 'Book This Tour',
      airport_title: 'Airport Transfers',
      airport_desc: 'Reliable pick-up and drop services to all nearby airports with comfortable vehicles and punctual drivers.',
      airport_lucknow: 'Lucknow Airport (Chaudhary Charan Singh)',
      airport_varanasi: 'Varanasi Airport (Lal Bahadur Shastri)',
      airport_ayodhya: 'Ayodhya Airport (Maharishi Valmiki)',
      book_transfer: 'Book Transfer',
      multiday_title: 'Multi-Day Tour Packages',
      multiday_desc: 'Custom multi-day itineraries covering the most sacred and scenic destinations across Uttar Pradesh.',
      multiday_tag_1: 'Flexible Itinerary',
      multiday_tag_2: 'Comfortable Stay',
      multiday_tag_3: 'Expert Drivers',
      multiday_enquire: 'Enquire About Packages',
      cta_title: 'Ready to Explore?',
      cta_desc: 'Contact us to plan your perfect outstation trip from Ayodhya. We offer the best rates with experienced drivers.',
      cta_whatsapp: 'Chat on WhatsApp',
      cta_fleet: 'View Our Fleet',
    },
    ayodhya: {
      section_title: 'Ayodhya Darshan',
      section_subtitle: 'Explore the Sacred City of Lord Ram',
      intro:
        'Ayodhya, the birthplace of Lord Shri Ram, is one of the seven sacred cities (Sapta Puri) in Hinduism. Let us take you on a divine journey through its most revered sites.',
      saryu_ghat: {
        name: 'Saryu Ghat (Saryu Nadi)',
        desc: 'The sacred Saryu River is the lifeline of Ayodhya. Take a holy dip, witness the mesmerizing evening aarti, and experience the spiritual serenity of the ghats that have been revered for millennia.',
      },
      ram_mandir: {
        name: 'Shri Ram Janmabhoomi Mandir',
        desc: 'The magnificent Ram Mandir at the birthplace of Lord Shri Ram is the crown jewel of Ayodhya. This grand temple, built in Nagara style architecture, is a testament to centuries of faith and devotion.',
      },
      nageshwarnath: {
        name: 'Nageshwarnath Mandir',
        desc: 'One of the oldest temples in Ayodhya, Nageshwarnath Temple is dedicated to Lord Shiva. Believed to have been established by Kush, son of Lord Ram, it is the only temple that survived the test of time through all eras.',
      },
      hanuman_garhi: {
        name: 'Hanuman Garhi',
        desc: 'Perched atop a hill with 76 steps, Hanuman Garhi is a 10th-century fort-like temple dedicated to Lord Hanuman. It is believed that Hanuman lived here in a cave to guard Ayodhya and Ram Janmabhoomi.',
      },
      kanak_bhawan: {
        name: 'Kanak Bhawan',
        desc: 'Kanak Bhawan is a beautiful temple said to have been gifted by Kaikeyi to Sita as a wedding gift. The temple houses stunning golden idols of Lord Ram and Mata Sita adorned with exquisite jewelry and crowns.',
      },
      ram_ki_paidi: {
        name: 'Ram Ki Paidi',
        desc: 'A series of magnificent ghats along the Saryu River, Ram Ki Paidi is famous for its grand aarti ceremonies, especially during Deepotsav when millions of diyas illuminate the steps, creating a breathtaking spectacle.',
      },
      sita_ki_rasoi: {
        name: 'Sita Ki Rasoi',
        desc: 'This ancient site is believed to be the kitchen where Mata Sita cooked food for the first time after her marriage to Lord Ram. The sacred kitchen still has the original utensils and chulha preserved for devotees to see.',
      },
    },
    varanasi: {
      section_title: 'Varanasi Darshan',
      section_subtitle: 'The Spiritual Capital of India',
      intro:
        'Varanasi (Kashi), one of the oldest living cities in the world, is the spiritual capital of India. We offer comfortable taxi service from Ayodhya to Varanasi with guided tours of all major attractions.',
      dashashwamedh: {
        name: 'Dashashwamedh Ghat – Ganga Aarti',
        desc: 'Witness the world-famous Ganga Aarti at Dashashwamedh Ghat, one of the most spectacular spiritual ceremonies on earth. Every evening, priests perform this magnificent ritual with fire, chants, and bells on the banks of the Ganges.',
      },
      tridev: {
        name: 'Tridev Temple',
        desc: 'Tridev Temple is dedicated to the holy trinity — Brahma, Vishnu, and Mahesh. This unique temple allows devotees to worship all three supreme deities under one roof, making it a truly special pilgrimage site in Varanasi.',
      },
      kashi_vishwanath: {
        name: 'Kashi Vishwanath Temple',
        desc: 'The Kashi Vishwanath Temple, one of the twelve Jyotirlingas, is the most famous Hindu temple in Varanasi dedicated to Lord Shiva. The newly built Kashi Vishwanath Dham corridor has transformed the temple complex magnificently.',
      },
      bharat_mata: {
        name: 'Bharat Mata Temple',
        desc: 'A unique temple dedicated to Mother India, Bharat Mata Temple houses a massive marble relief map of undivided India instead of traditional idols. Inaugurated by Mahatma Gandhi, it is a symbol of patriotism and national pride.',
      },
      sankat_mochan: {
        name: 'Sankat Mochan Hanuman Temple',
        desc: 'Founded by the great saint Tulsidas, the Sankat Mochan Temple is one of the most sacred Hanuman temples in India. "Sankat Mochan" means "reliever of troubles," and devotees flock here seeking blessings and peace of mind.',
      },
      tulsi_manas: {
        name: 'Tulsi Manas Mandir',
        desc: 'Built at the place where Goswami Tulsidas wrote the epic Ramcharitmanas, this beautiful white marble temple has verses from the Ramcharitmanas engraved on its walls. A must-visit for devotees of Lord Ram.',
      },
      durga_temple: {
        name: 'Durga Temple (Durga Kund)',
        desc: 'Known as the Monkey Temple due to the large number of monkeys in its vicinity, the Durga Temple is an 18th-century temple dedicated to Goddess Durga. The temple is built in Nagara style and features a rectangular pond called Durga Kund.',
      },
      sarnath: {
        name: 'Sarnath',
        desc: 'Just 10 km from Varanasi, Sarnath is where Lord Buddha gave his first sermon after attaining enlightenment. Visit the Dhamek Stupa, Ashoka Pillar, Sarnath Museum, and the peaceful Buddhist monasteries.',
      },
      bhu: {
        name: 'Banaras Hindu University (BHU)',
        desc: 'One of the largest residential universities in Asia, BHU campus is home to the stunning New Vishwanath Temple (Birla Temple), the Bharat Kala Bhavan museum, and beautifully landscaped gardens worth exploring.',
      },
    },
    contact: {
      section_title: 'Contact Us',
      section_subtitle: 'Get in Touch for Bookings & Enquiries',
      form_name: 'Your Name',
      form_email: 'Email Address',
      form_phone: 'Phone Number',
      form_service: 'Service Required',
      form_service_placeholder: 'Select a service',
      form_pickup: 'Pickup Location',
      form_drop: 'Drop Location',
      form_date: 'Travel Date',
      form_passengers: 'Number of Passengers',
      form_message: 'Additional Message',
      form_submit: 'Send Enquiry',
      form_success: 'Thank you! Your enquiry has been sent successfully. We will contact you shortly.',
      address_label: 'Our Office',
      address:
        'Booth No. 4, Ramayana Hotel, Shahnawazpur Manjha, Ayodhya, UP, PIN 224135',
      phone_label: 'Call Us',
      phone: '+91 96286 97744',
      email_label: 'Email Us',
      hours_label: 'Working Hours',
      hours: '24/7 — We are always available',
      whatsapp_label: 'WhatsApp Us',
    },
    footer: {
      company_name: 'Jai Shree Ram Tours & Travels',
      tagline: 'Your trusted travel partner in the holy city of Ayodhya',
      quick_links: 'Quick Links',
      our_services: 'Our Services',
      contact_info: 'Contact Info',
      copyright: '© 2025 Jai Shree Ram Tours & Travels. All rights reserved.',
      designed_by: 'Made with ❤️ in Ayodhya',
      follow_us: 'Follow Us',
    },
    common: {
      book_now: 'Book Now',
      enquire: 'Enquire Now',
      learn_more: 'Learn More',
      view_all: 'View All',
      call_now: 'Call Now',
      whatsapp: 'WhatsApp',
      send_message: 'Send Message',
      get_quote: 'Get Quote',
      read_more: 'Read More',
      back_to_top: 'Back to Top',
      loading: 'Loading...',
      error: 'Something went wrong',
      close: 'Close',
      open: 'Open',
      menu: 'Menu',
      language: 'Language',
      english: 'English',
      hindi: 'हिन्दी',
      whatsapp_default_message: 'Hello! I would like to enquire about taxi/tour services from Jai Shree Ram Tours & Travels, Ayodhya.',
    },
    gallery: {
      section_title: 'Gallery',
      section_subtitle:
        'Glimpses of Our Journeys and the Beautiful Destinations We Cover',
    },
    testimonials: {
      section_title: 'What Our Customers Say',
      section_subtitle: 'Real Experiences from Real Travelers',
      t1_name: 'Rajesh Sharma',
      t1_location: 'Delhi',
      t1_text:
        'We booked an Innova Crysta for our family trip to Ayodhya. The car was spotless, the driver was very courteous, and Vishal ji personally ensured everything went smoothly. Highly recommended!',
      t2_name: 'Priya Gupta',
      t2_location: 'Mumbai',
      t2_text:
        'Excellent service for our Ayodhya-Varanasi-Prayagraj tour. The driver knew all the routes and temples perfectly. Very reasonable rates compared to others. Will definitely book again.',
      t3_name: 'Amit Pandey',
      t3_location: 'Lucknow',
      t3_text:
        'Used their airport pickup service from Lucknow to Ayodhya. Driver was on time, car was clean and comfortable. The per-km pricing is very transparent with no hidden charges.',
      t4_name: 'Sunita Devi',
      t4_location: 'Patna',
      t4_text:
        'Booked a WagonR for local Ayodhya darshan. The driver was like a guide — he knew the history of every temple. Very affordable and reliable service. Jai Shree Ram! 🙏',
    },
    why_choose: {
      section_title: 'Why Choose Us',
      section_subtitle: 'What Makes Us Different',
      reason1_title: 'Verified & Experienced Drivers',
      reason1_desc:
        'All our drivers are police-verified, experienced, and well-mannered. They know every route, temple, and shortcut in Ayodhya and surrounding areas.',
      reason2_title: 'Transparent Pricing',
      reason2_desc:
        'Simple per-km rates starting at just ₹9/km. No hidden charges, no surge pricing. Get an exact quote before you book.',
      reason3_title: '24/7 Availability',
      reason3_desc:
        'Whether it\'s an early morning temple visit or a late-night airport pickup, we are available round the clock, 365 days a year.',
      reason4_title: 'Well-Maintained Fleet',
      reason4_desc:
        'Our vehicles are regularly serviced, thoroughly cleaned, and equipped with AC, first-aid kits, and all safety features for a worry-free journey.',
      reason5_title: 'Local Expertise',
      reason5_desc:
        'Being based in Ayodhya, we have deep knowledge of all religious sites, local customs, darshan timings, and the best routes to save your time.',
    },
    faq: {
      section_title: 'Frequently Asked Questions',
      section_subtitle: 'Everything You Need to Know',
      q1: 'How do I book a taxi with Jai Shree Ram Tours & Travels?',
      a1: 'You can book a taxi by calling us at +91 96286 97744, sending a WhatsApp message, or filling out the enquiry form on our website. We will confirm your booking within minutes.',
      q2: 'What are your per-km rates?',
      a2: 'Our rates start at ₹9/km for WagonR, ₹11/km for Swift Dzire, ₹14/km for Ertiga, and ₹17/km for Innova Crysta. These are all-inclusive rates with AC. Toll and parking charges are extra as applicable.',
      q3: 'Do you provide outstation taxi service from Ayodhya?',
      a3: 'Yes, we provide outstation taxi service from Ayodhya to all major cities including Varanasi, Prayagraj, Lucknow, Agra, Mathura, Vrindavan, Delhi, and many more. Both one-way and round-trip options are available.',
      q4: 'Are your drivers familiar with religious sites and temples?',
      a4: 'Absolutely! Our drivers are locals who have extensive knowledge of all religious sites, darshan timings, VIP entry points, and the best routes. They act as informal guides during your pilgrimage.',
      q5: 'Is airport pickup and drop available?',
      a5: 'Yes, we offer airport pickup and drop services for Lucknow (Chaudhary Charan Singh Airport), Varanasi (Lal Bahadur Shastri Airport), and Prayagraj (Bamrauli Airport). We track flight timings to ensure timely service.',
      q6: 'Can I book a taxi for a multi-day trip?',
      a6: 'Yes, we offer multi-day packages for extended tours covering Ayodhya, Varanasi, Prayagraj, and other destinations. Special rates are available for multi-day bookings. Contact us for a custom quote.',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएँ',
      fleet: 'हमारी गाड़ियाँ',
      tours: 'टूर पैकेज',
      ayodhya: 'अयोध्या दर्शन',
      varanasi: 'वाराणसी दर्शन',
      gallery: 'गैलरी',
      contact: 'संपर्क करें',
    },
    hero: {
      title: 'जय श्री राम टूर्स एंड ट्रैवल्स',
      subtitle:
        'अयोध्या की आपकी भरोसेमंद टैक्सी सेवा — आरामदायक, किफ़ायती और विश्वसनीय यात्रा, पूरे उत्तर प्रदेश और उसके बाहर।',
      cta_book: 'अभी बुक करें',
      cta_explore: 'टूर देखें',
      tagline: 'तीर्थ यात्रा • दर्शन • आउटस्टेशन • एयरपोर्ट ट्रांसफ़र',
    },
    about: {
      section_title: 'हमारे बारे में',
      section_subtitle: 'अयोध्या में आपका विश्वसनीय यात्रा साथी',
      description:
        'जय श्री राम टूर्स एंड ट्रैवल्स अयोध्या की पवित्र नगरी में स्थित एक प्रमुख टैक्सी और यात्रा सेवा है। हम धार्मिक यात्रा, स्थानीय दर्शन, आउटस्टेशन ट्रैवल और शादी-ब्याह के लिए गाड़ी की सेवा प्रदान करते हैं।',
      owner_label: 'संस्थापक एवं मालिक',
      owner_name: 'विशाल तिवारी',
      owner_bio:
        'यात्रा और आतिथ्य उद्योग में वर्षों के अनुभव के साथ, विशाल तिवारी ने जय श्री राम टूर्स एंड ट्रैवल्स की स्थापना एक सरल उद्देश्य से की — अयोध्या आने वाले श्रद्धालुओं और पर्यटकों को सुरक्षित, आरामदायक और किफ़ायती यातायात सेवा प्रदान करना।',
      experience: '10+ वर्षों का अनुभव',
      experience_desc:
        'एक दशक से अधिक समय से श्रद्धालुओं और पर्यटकों की समर्पण और देखभाल के साथ सेवा।',
      mission_title: 'हमारा उद्देश्य',
      mission_desc:
        'हर यात्रा को सुरक्षित, स्वच्छ और समय पर परिवहन सेवा देकर एक यादगार और आध्यात्मिक अनुभव बनाना — ईमानदार दामों पर।',
      values_title: 'हमारे मूल्य',
      value_safety: 'सुरक्षा सर्वोपरि',
      value_safety_desc:
        'अच्छी तरह से रखरखाव की गई गाड़ियाँ और अनुभवी, सत्यापित ड्राइवर — हर यात्रा के लिए।',
      value_honesty: 'ईमानदार दाम',
      value_honesty_desc:
        'पारदर्शी प्रति-किमी दरें, कोई छिपे हुए शुल्क नहीं। जो बताएँ, वही लगे।',
      value_comfort: 'आराम और स्वच्छता',
      value_comfort_desc:
        'एकदम साफ़-सुथरी, एयर कंडीशन्ड गाड़ियाँ — आपकी यात्रा को सुखद बनाने के लिए।',
      value_reliability: 'भरोसेमंद सेवा',
      value_reliability_desc:
        'समय पर पिकअप, सुनियोजित मार्ग और आपकी सुविधा के लिए 24/7 उपलब्धता।',
      happy_customers: 'संतुष्ट ग्राहक',
      trips_completed: 'यात्राएँ पूर्ण',
      years_experience: 'वर्षों का अनुभव',
      vehicles_in_fleet: 'गाड़ियाँ',
    },
    services: {
      section_title: 'हमारी सेवाएँ',
      section_subtitle: 'हर ज़रूरत के लिए यात्रा समाधान',
      local_title: 'स्थानीय दर्शन',
      local_desc:
        'हमारे स्थानीय दर्शन पैकेज के साथ अयोध्या के पवित्र स्थलों का भ्रमण करें। राम मंदिर, हनुमान गढ़ी, कनक भवन और अन्य सभी प्रमुख मंदिरों के दर्शन आराम से करें।',
      wedding_title: 'शादी और कार्यक्रम',
      wedding_desc:
        'अपने विशेष अवसरों को और भी शानदार बनाएँ हमारी सजी-धजी गाड़ियों से। शादी, सगाई और पारिवारिक कार्यक्रमों के लिए गाड़ियाँ उपलब्ध हैं।',
      airport_title: 'एयरपोर्ट पिकअप और ड्रॉप',
      airport_desc:
        'लखनऊ, वाराणसी और प्रयागराज एयरपोर्ट से आसान और समय पर पिकअप-ड्रॉप सेवा। फ्लाइट ट्रैकिंग और आरामदायक सवारी।',
      religious_title: 'धार्मिक यात्रा',
      religious_desc:
        'अयोध्या, वाराणसी, प्रयागराज, मथुरा, वृंदावन और अन्य पवित्र स्थलों की आध्यात्मिक यात्रा करें हमारे विशेष टूर पैकेज के साथ।',
      outstation_title: 'आउटस्टेशन यात्रा',
      outstation_desc:
        'अयोध्या से बाहर की यात्रा के लिए हमारी विश्वसनीय आउटस्टेशन टैक्सी सेवा लें। उत्तर प्रदेश और पूरे भारत के प्रमुख शहरों के लिए वन-वे और राउंड-ट्रिप उपलब्ध।',
    },
    fleet: {
      section_title: 'हमारी गाड़ियाँ',
      section_subtitle: 'अपनी यात्रा के लिए सही गाड़ी चुनें',
      per_km: 'प्रति किमी',
      book_now: 'अभी बुक करें',
      features: 'विशेषताएँ',
      capacity: 'क्षमता',
      passengers: 'यात्री',
      ideal_for: 'उपयुक्त',
      innova: {
        name: 'टोयोटा इनोवा क्रिस्टा',
        rate: '₹17',
        capacity: '6-7',
        ideal: 'परिवार की यात्रा, धार्मिक दर्शन, आउटस्टेशन',
        features: 'AC, बड़ी डिक्की, रिक्लाइनिंग सीटें, चार्जिंग पॉइंट, म्यूज़िक सिस्टम',
      },
      ertiga: {
        name: 'मारुति अर्टिगा',
        rate: '₹14',
        capacity: '6',
        ideal: 'ग्रुप दर्शन, छोटे परिवार, एयरपोर्ट ट्रांसफ़र',
        features: 'AC, आरामदायक सीटिंग, पर्याप्त लेगरूम, म्यूज़िक सिस्टम',
      },
      dzire: {
        name: 'मारुति स्विफ्ट डिज़ायर',
        rate: '₹11',
        capacity: '4',
        ideal: 'दंपति, छोटे परिवार, शहर की यात्रा',
        features: 'AC, आरामदायक सेडान, अच्छा माइलेज, स्मूथ राइड',
      },
      wagonr: {
        name: 'मारुति वैगनआर',
        rate: '₹9',
        capacity: '4',
        ideal: 'बजट यात्रा, स्थानीय दर्शन, छोटी दूरी',
        features: 'AC, छोटी और पार्किंग में आसान, किफ़ायती, शहर के लिए उपयुक्त',
      },
    },
    tours: {
      section_title: 'आउटस्टेशन टूर',
      section_subtitle: 'अयोध्या से आगे की यात्रा',
      from_ayodhya: 'अयोध्या से',
      distance: 'दूरी',
      travel_time: 'यात्रा समय',
      starting_from: 'शुरुआती दर',
      prayagraj: {
        name: 'प्रयागराज (इलाहाबाद)',
        desc: 'पवित्र त्रिवेणी संगम, आनंद भवन, इलाहाबाद किला और खुसरो बाग़ के दर्शन करें। अयोध्या से एक दिन की यात्रा के लिए बिल्कुल सही।',
        distance: '~160 किमी',
        time: '3–4 घंटे',
      },
      lucknow: {
        name: 'लखनऊ',
        desc: 'नवाबों के शहर का भ्रमण करें — बड़ा इमामबाड़ा, छोटा इमामबाड़ा, रूमी दरवाज़ा, हज़रतगंज और लखनवी ज़ायके का आनंद लें।',
        distance: '~135 किमी',
        time: '2.5–3 घंटे',
      },
      varanasi: {
        name: 'वाराणसी (काशी)',
        desc: 'भारत की आध्यात्मिक राजधानी का अनुभव करें — काशी विश्वनाथ मंदिर, दशाश्वमेध घाट पर गंगा आरती, सारनाथ और प्राचीन घाट।',
        distance: '~200 किमी',
        time: '4–5 घंटे',
      },
      agra_mathura: {
        name: 'आगरा – मथुरा – वृंदावन',
        desc: 'ताज महल, आगरा का किला, मथुरा में कृष्ण जन्मभूमि, वृंदावन में बांके बिहारी मंदिर और प्रेम मंदिर के दर्शन करें।',
        distance: '~600 किमी',
        time: '9–10 घंटे',
      },
      outstation_title: 'अयोध्या से आउटस्टेशन मार्ग',
      book_tour: 'यह टूर बुक करें',
      airport_title: 'एयरपोर्ट ट्रांसफर',
      airport_desc: 'सभी नज़दीकी हवाई अड्डों के लिए आरामदायक वाहनों और समयनिष्ठ ड्राइवरों के साथ विश्वसनीय पिक-अप और ड्रॉप सेवा।',
      airport_lucknow: 'लखनऊ हवाई अड्डा (चौधरी चरण सिंह)',
      airport_varanasi: 'वाराणसी हवाई अड्डा (लाल बहादुर शास्त्री)',
      airport_ayodhya: 'अयोध्या हवाई अड्डा (महर्षि वाल्मीकि)',
      book_transfer: 'ट्रांसफर बुक करें',
      multiday_title: 'मल्टी-डे टूर पैकेज',
      multiday_desc: 'उत्तर प्रदेश के सबसे पवित्र और सुंदर स्थलों को कवर करने वाली कस्टम बहु-दिवसीय यात्राएँ।',
      multiday_tag_1: 'लचीला कार्यक्रम',
      multiday_tag_2: 'आरामदायक ठहराव',
      multiday_tag_3: 'अनुभवी ड्राइवर',
      multiday_enquire: 'पैकेज के बारे में पूछें',
      cta_title: 'यात्रा के लिए तैयार?',
      cta_desc: 'अयोध्या से अपनी आदर्श आउटस्टेशन यात्रा की योजना बनाने के लिए हमसे संपर्क करें। अनुभवी ड्राइवरों के साथ सर्वोत्तम दरें।',
      cta_whatsapp: 'व्हाट्सएप पर चैट करें',
      cta_fleet: 'हमारा बेड़ा देखें',
    },
    ayodhya: {
      section_title: 'अयोध्या दर्शन',
      section_subtitle: 'भगवान श्री राम की पवित्र नगरी',
      intro:
        'अयोध्या, भगवान श्री राम की जन्मभूमि, हिन्दू धर्म की सात पवित्र नगरियों (सप्त पुरी) में से एक है। आइए, हम आपको इसके सबसे पूजनीय स्थलों की दिव्य यात्रा पर ले चलते हैं।',
      saryu_ghat: {
        name: 'सरयू घाट (सरयू नदी)',
        desc: 'पवित्र सरयू नदी अयोध्या की जीवन रेखा है। यहाँ पुण्य स्नान करें, मनमोहक संध्या आरती देखें और उन घाटों की आध्यात्मिक शांति का अनुभव करें जो हज़ारों वर्षों से पूजनीय हैं।',
      },
      ram_mandir: {
        name: 'श्री राम जन्मभूमि मंदिर',
        desc: 'भगवान श्री राम की जन्मभूमि पर बना भव्य राम मंदिर अयोध्या का मुकुट मणि है। नागर शैली की वास्तुकला में बना यह विशाल मंदिर सदियों की आस्था और भक्ति का प्रतीक है।',
      },
      nageshwarnath: {
        name: 'नागेश्वरनाथ मंदिर',
        desc: 'अयोध्या के सबसे प्राचीन मंदिरों में से एक, नागेश्वरनाथ मंदिर भगवान शिव को समर्पित है। माना जाता है कि इसकी स्थापना भगवान राम के पुत्र कुश ने की थी। यह एकमात्र मंदिर है जो हर युग की कसौटी पर खरा उतरा।',
      },
      hanuman_garhi: {
        name: 'हनुमान गढ़ी',
        desc: '76 सीढ़ियों पर बना हनुमान गढ़ी 10वीं शताब्दी का किले जैसा मंदिर है जो भगवान हनुमान को समर्पित है। मान्यता है कि हनुमान जी यहाँ एक गुफ़ा में रहकर अयोध्या और राम जन्मभूमि की रक्षा करते थे।',
      },
      kanak_bhawan: {
        name: 'कनक भवन',
        desc: 'कनक भवन एक सुंदर मंदिर है जो कैकेयी ने सीता जी को विवाह की भेंट के रूप में दिया था। मंदिर में भगवान राम और माता सीता की सोने की अद्भुत मूर्तियाँ हैं जो बेहतरीन आभूषणों और मुकुटों से सजी हैं।',
      },
      ram_ki_paidi: {
        name: 'राम की पैड़ी',
        desc: 'सरयू नदी के किनारे बने भव्य घाटों की श्रृंखला, राम की पैड़ी अपनी शानदार आरती के लिए प्रसिद्ध है। दीपोत्सव में यहाँ लाखों दीये जलाए जाते हैं जो एक अविस्मरणीय दृश्य बनाते हैं।',
      },
      sita_ki_rasoi: {
        name: 'सीता की रसोई',
        desc: 'यह प्राचीन स्थल वह रसोई मानी जाती है जहाँ माता सीता ने भगवान राम से विवाह के बाद पहली बार भोजन बनाया था। पवित्र रसोई में आज भी मूल बर्तन और चूल्हा श्रद्धालुओं के दर्शन के लिए संरक्षित हैं।',
      },
    },
    varanasi: {
      section_title: 'वाराणसी दर्शन',
      section_subtitle: 'भारत की आध्यात्मिक राजधानी',
      intro:
        'वाराणसी (काशी), दुनिया के सबसे प्राचीन जीवित शहरों में से एक, भारत की आध्यात्मिक राजधानी है। हम अयोध्या से वाराणसी तक आरामदायक टैक्सी सेवा और सभी प्रमुख स्थलों का गाइडेड टूर प्रदान करते हैं।',
      dashashwamedh: {
        name: 'दशाश्वमेध घाट – गंगा आरती',
        desc: 'दशाश्वमेध घाट पर विश्व प्रसिद्ध गंगा आरती देखें — धरती पर सबसे भव्य आध्यात्मिक अनुष्ठानों में से एक। हर शाम पंडित अग्नि, मंत्रोच्चार और घंटों के साथ गंगा किनारे यह अद्भुत आरती करते हैं।',
      },
      tridev: {
        name: 'त्रिदेव मंदिर',
        desc: 'त्रिदेव मंदिर पवित्र त्रिमूर्ति — ब्रह्मा, विष्णु और महेश को समर्पित है। यह अनूठा मंदिर भक्तों को एक ही छत के नीचे तीनों परम देवताओं की पूजा का अवसर देता है, जो वाराणसी में एक विशेष तीर्थ स्थल है।',
      },
      kashi_vishwanath: {
        name: 'काशी विश्वनाथ मंदिर',
        desc: 'बारह ज्योतिर्लिंगों में से एक, काशी विश्वनाथ मंदिर वाराणसी का सबसे प्रसिद्ध शिव मंदिर है। नवनिर्मित काशी विश्वनाथ धाम कॉरिडोर ने मंदिर परिसर को और भी भव्य बना दिया है।',
      },
      bharat_mata: {
        name: 'भारत माता मंदिर',
        desc: 'भारत माता को समर्पित यह अनूठा मंदिर पारंपरिक मूर्तियों की जगह अखंड भारत का विशाल संगमरमर का मानचित्र रखता है। महात्मा गांधी द्वारा उद्घाटित यह मंदिर देशभक्ति और राष्ट्रीय गौरव का प्रतीक है।',
      },
      sankat_mochan: {
        name: 'संकट मोचन हनुमान मंदिर',
        desc: 'महान संत तुलसीदास जी द्वारा स्थापित, संकट मोचन मंदिर भारत के सबसे पवित्र हनुमान मंदिरों में से एक है। "संकट मोचन" का अर्थ है "कष्ट हरने वाला" — भक्त यहाँ आशीर्वाद और मन की शांति पाने आते हैं।',
      },
      tulsi_manas: {
        name: 'तुलसी मानस मंदिर',
        desc: 'उस स्थान पर बना जहाँ गोस्वामी तुलसीदास ने महाकाव्य रामचरितमानस लिखा, इस सुंदर सफ़ेद संगमरमर के मंदिर की दीवारों पर रामचरितमानस के छंद उकेरे गए हैं। भगवान राम के भक्तों के लिए अवश्य दर्शनीय।',
      },
      durga_temple: {
        name: 'दुर्गा मंदिर (दुर्गा कुंड)',
        desc: 'आसपास बड़ी संख्या में बंदरों के कारण "बंदर मंदिर" के नाम से भी जाना जाने वाला दुर्गा मंदिर 18वीं शताब्दी का देवी दुर्गा को समर्पित मंदिर है। नागर शैली में बना यह मंदिर दुर्गा कुंड नामक तालाब के पास स्थित है।',
      },
      sarnath: {
        name: 'सारनाथ',
        desc: 'वाराणसी से मात्र 10 किमी दूर, सारनाथ वह स्थान है जहाँ भगवान बुद्ध ने ज्ञान प्राप्ति के बाद अपना पहला उपदेश दिया। धमेक स्तूप, अशोक स्तंभ, सारनाथ संग्रहालय और शांत बौद्ध मठों के दर्शन करें।',
      },
      bhu: {
        name: 'बनारस हिन्दू विश्वविद्यालय (BHU)',
        desc: 'एशिया के सबसे बड़े आवासीय विश्वविद्यालयों में से एक, BHU कैंपस में भव्य नया विश्वनाथ मंदिर (बिड़ला मंदिर), भारत कला भवन संग्रहालय और सुंदर बग़ीचे देखने लायक़ हैं।',
      },
    },
    contact: {
      section_title: 'संपर्क करें',
      section_subtitle: 'बुकिंग और जानकारी के लिए संपर्क करें',
      form_name: 'आपका नाम',
      form_email: 'ईमेल पता',
      form_phone: 'फ़ोन नंबर',
      form_service: 'कौन सी सेवा चाहिए',
      form_service_placeholder: 'सेवा चुनें',
      form_pickup: 'पिकअप स्थान',
      form_drop: 'ड्रॉप स्थान',
      form_date: 'यात्रा की तारीख़',
      form_passengers: 'यात्रियों की संख्या',
      form_message: 'अतिरिक्त संदेश',
      form_submit: 'पूछताछ भेजें',
      form_success: 'धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेज दी गई है। हम जल्द ही आपसे संपर्क करेंगे।',
      address_label: 'हमारा कार्यालय',
      address:
        'बूथ नं. 4, रामायण होटल, शाहनवाज़पुर मांझा, अयोध्या, उत्तर प्रदेश, पिन 224135',
      phone_label: 'कॉल करें',
      phone: '+91 96286 97744',
      email_label: 'ईमेल करें',
      hours_label: 'कार्य समय',
      hours: '24/7 — हम हमेशा उपलब्ध हैं',
      whatsapp_label: 'व्हाट्सएप करें',
    },
    footer: {
      company_name: 'जय श्री राम टूर्स एंड ट्रैवल्स',
      tagline: 'अयोध्या की पवित्र नगरी में आपका विश्वसनीय यात्रा साथी',
      quick_links: 'त्वरित लिंक',
      our_services: 'हमारी सेवाएँ',
      contact_info: 'संपर्क जानकारी',
      copyright: '© 2025 जय श्री राम टूर्स एंड ट्रैवल्स। सर्वाधिकार सुरक्षित।',
      designed_by: 'अयोध्या में ❤️ से बनाया गया',
      follow_us: 'हमें फ़ॉलो करें',
    },
    common: {
      book_now: 'अभी बुक करें',
      enquire: 'पूछताछ करें',
      learn_more: 'और जानें',
      view_all: 'सभी देखें',
      call_now: 'अभी कॉल करें',
      whatsapp: 'व्हाट्सएप',
      send_message: 'संदेश भेजें',
      get_quote: 'दाम जानें',
      read_more: 'और पढ़ें',
      back_to_top: 'ऊपर जाएँ',
      loading: 'लोड हो रहा है...',
      error: 'कुछ गड़बड़ हो गई',
      close: 'बंद करें',
      open: 'खोलें',
      menu: 'मेन्यू',
      language: 'भाषा',
      english: 'English',
      hindi: 'हिन्दी',
      whatsapp_default_message: 'नमस्कार! मैं जय श्री राम टूर्स एंड ट्रैवल्स, अयोध्या से टैक्सी/टूर सेवा के बारे में जानना चाहता/चाहती हूँ।',
    },
    gallery: {
      section_title: 'गैलरी',
      section_subtitle:
        'हमारी यात्राओं और ख़ूबसूरत गंतव्यों की झलकियाँ',
    },
    testimonials: {
      section_title: 'हमारे ग्राहक क्या कहते हैं',
      section_subtitle: 'असली यात्रियों के असली अनुभव',
      t1_name: 'राजेश शर्मा',
      t1_location: 'दिल्ली',
      t1_text:
        'हमने अयोध्या की पारिवारिक यात्रा के लिए इनोवा क्रिस्टा बुक की थी। गाड़ी एकदम साफ़ थी, ड्राइवर बहुत शिष्ट था और विशाल जी ने ख़ुद सब कुछ सुचारू रूप से चलने का ध्यान रखा। बहुत सिफ़ारिश करूँगा!',
      t2_name: 'प्रिया गुप्ता',
      t2_location: 'मुंबई',
      t2_text:
        'अयोध्या-वाराणसी-प्रयागराज टूर के लिए बेहतरीन सेवा। ड्राइवर को सभी रास्ते और मंदिर अच्छे से पता थे। दूसरों की तुलना में बहुत उचित दरें। ज़रूर दोबारा बुक करेंगे।',
      t3_name: 'अमित पांडेय',
      t3_location: 'लखनऊ',
      t3_text:
        'लखनऊ एयरपोर्ट से अयोध्या तक पिकअप सेवा ली। ड्राइवर समय पर था, गाड़ी साफ़ और आरामदायक थी। प्रति-किमी दाम बिल्कुल पारदर्शी हैं, कोई छिपे हुए शुल्क नहीं।',
      t4_name: 'सुनीता देवी',
      t4_location: 'पटना',
      t4_text:
        'स्थानीय अयोध्या दर्शन के लिए वैगनआर बुक की। ड्राइवर तो गाइड जैसा था — उसे हर मंदिर का इतिहास पता था। बहुत किफ़ायती और भरोसेमंद सेवा। जय श्री राम! 🙏',
    },
    why_choose: {
      section_title: 'हमें ही क्यों चुनें',
      section_subtitle: 'हम कैसे अलग हैं',
      reason1_title: 'सत्यापित और अनुभवी ड्राइवर',
      reason1_desc:
        'हमारे सभी ड्राइवर पुलिस-सत्यापित, अनुभवी और शिष्ट हैं। उन्हें अयोध्या और आसपास के क्षेत्रों का हर रास्ता, मंदिर और शॉर्टकट पता है।',
      reason2_title: 'पारदर्शी दाम',
      reason2_desc:
        'सिर्फ़ ₹9/किमी से शुरू होने वाली सरल प्रति-किमी दरें। कोई छिपे हुए शुल्क नहीं, कोई सर्ज प्राइसिंग नहीं। बुकिंग से पहले सटीक दाम जानें।',
      reason3_title: '24/7 उपलब्धता',
      reason3_desc:
        'चाहे सुबह जल्दी मंदिर जाना हो या रात को एयरपोर्ट पिकअप — हम साल के 365 दिन, चौबीसों घंटे उपलब्ध हैं।',
      reason4_title: 'अच्छी तरह रखरखाव की गई गाड़ियाँ',
      reason4_desc:
        'हमारी गाड़ियों की नियमित सर्विसिंग होती है, पूरी सफ़ाई होती है, और AC, फ़र्स्ट-एड किट व सभी सुरक्षा सुविधाएँ उपलब्ध हैं — बेफ़िक्र यात्रा के लिए।',
      reason5_title: 'स्थानीय विशेषज्ञता',
      reason5_desc:
        'अयोध्या में स्थित होने के कारण, हमें सभी धार्मिक स्थलों, स्थानीय रीति-रिवाज़ों, दर्शन के समय और सबसे अच्छे रास्तों की गहरी जानकारी है — आपका समय बचाने के लिए।',
    },
    faq: {
      section_title: 'अक्सर पूछे जाने वाले प्रश्न',
      section_subtitle: 'वो सब जो आपको जानना चाहिए',
      q1: 'जय श्री राम टूर्स एंड ट्रैवल्स से टैक्सी कैसे बुक करें?',
      a1: 'आप हमें +91 96286 97744 पर कॉल करके, व्हाट्सएप मैसेज भेजकर या वेबसाइट पर पूछताछ फ़ॉर्म भरकर टैक्सी बुक कर सकते हैं। हम मिनटों में आपकी बुकिंग की पुष्टि कर देंगे।',
      q2: 'आपकी प्रति-किमी दरें क्या हैं?',
      a2: 'हमारी दरें वैगनआर के लिए ₹9/किमी, स्विफ्ट डिज़ायर के लिए ₹11/किमी, अर्टिगा के लिए ₹14/किमी और इनोवा क्रिस्टा के लिए ₹17/किमी से शुरू होती हैं। ये सभी AC सहित दरें हैं। टोल और पार्किंग शुल्क यथा लागू अलग से लगते हैं।',
      q3: 'क्या आप अयोध्या से आउटस्टेशन टैक्सी सेवा देते हैं?',
      a3: 'जी हाँ, हम अयोध्या से वाराणसी, प्रयागराज, लखनऊ, आगरा, मथुरा, वृंदावन, दिल्ली और कई अन्य प्रमुख शहरों के लिए आउटस्टेशन टैक्सी सेवा प्रदान करते हैं। वन-वे और राउंड-ट्रिप दोनों विकल्प उपलब्ध हैं।',
      q4: 'क्या आपके ड्राइवर धार्मिक स्थलों और मंदिरों से परिचित हैं?',
      a4: 'बिल्कुल! हमारे ड्राइवर स्थानीय हैं जिन्हें सभी धार्मिक स्थलों, दर्शन के समय, VIP प्रवेश और सर्वोत्तम मार्गों की विस्तृत जानकारी है। वे आपकी तीर्थ यात्रा के दौरान अनौपचारिक गाइड की तरह काम करते हैं।',
      q5: 'क्या एयरपोर्ट पिकअप और ड्रॉप की सुविधा है?',
      a5: 'जी हाँ, हम लखनऊ (चौधरी चरण सिंह हवाई अड्डा), वाराणसी (लाल बहादुर शास्त्री हवाई अड्डा) और प्रयागराज (बमरौली हवाई अड्डा) के लिए एयरपोर्ट पिकअप और ड्रॉप सेवा प्रदान करते हैं। समय पर सेवा के लिए हम फ्लाइट ट्रैकिंग भी करते हैं।',
      q6: 'क्या मैं कई दिनों की यात्रा के लिए टैक्सी बुक कर सकता हूँ?',
      a6: 'जी हाँ, हम अयोध्या, वाराणसी, प्रयागराज और अन्य स्थलों को कवर करने वाले बहु-दिवसीय पैकेज प्रदान करते हैं। कई दिनों की बुकिंग पर विशेष दरें उपलब्ध हैं। कस्टम दाम के लिए हमसे संपर्क करें।',
    },
  },
} as const;
