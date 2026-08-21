const Database = {
  quiz: [
    {
      q: 'Surah apa yang disebut sebagai jantungnya Al-Quran?',
      options: ['Al-Baqarah', 'Yasin', 'Al-Kahfi', 'Al-Mulk'],
      ans: 1,
      exp: 'Surah Yasin sering disebut sebagai jantung Al-Quran karena kandungannya yang mencakup tauhid, risalah, dan hari akhirat.',
    },
    {
      q: "Asmaul Husna 'Al-Khaliq' memiliki arti...",
      options: [
        'Yang Maha Memelihara',
        'Yang Maha Mengetahui',
        'Yang Maha Pencipta',
        'Yang Maha Pengampun',
      ],
      ans: 2,
      exp: 'Al-Khaliq berarti Yang Maha Pencipta, yang menciptakan sesuatu dari tidak ada menjadi ada.',
    },
    {
      q: "Kapan doa 'Bismikallahumma ahyaa wa amuutu' diucapkan?",
      options: [
        'Sebelum makan',
        'Saat bangun tidur',
        'Saat keluar rumah',
        'Sebelum tidur',
      ],
      ans: 3,
      exp: "Ini adalah doa sebelum tidur, artinya 'Dengan nama-Mu, ya Allah, aku hidup dan mati.'",
    },
    {
      q: 'Berapa jumlah keseluruhan ayat dalam Surah Al-Baqarah?',
      options: ['286 ayat', '200 ayat', '256 ayat', '300 ayat'],
      ans: 0,
      exp: 'Surah Al-Baqarah adalah surah terpanjang dalam Al-Quran yang terdiri dari 286 ayat.',
    },
    {
      q: "Apa arti dari Asmaul Husna 'Ar-Rahman'?",
      options: [
        'Yang Maha Penyayang',
        'Yang Maha Pengasih',
        'Yang Maha Suci',
        'Yang Maha Adil',
      ],
      ans: 1,
      exp: 'Ar-Rahman berarti Yang Maha Pengasih untuk seluruh makhluk di dunia tanpa terkecuali.',
    },
    {
      q: "Doa 'Alhamdulillahilladzi ath'amanaa...' dibaca ketika?",
      options: [
        'Memulai makan',
        'Setelah makan',
        'Masuk masjid',
        'Memakai pakaian',
      ],
      ans: 1,
      exp: 'Doa tersebut dibaca setelah selesai makan sebagai bentuk rasa syukur atas rezeki.',
    },
    {
      q: 'Surah pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira adalah...',
      options: ['Al-Fatihah', 'Al-Muddatstsir', "Al-'Alaq (1-5)", 'Al-Baqarah'],
      ans: 2,
      exp: "Wahyu pertama adalah 5 ayat pertama dari Surah Al-'Alaq dengan perintah 'Iqra' (Bacalah).",
    },
    {
      q: "Asmaul Husna 'Al-Ghaffar' memiliki makna...",
      options: [
        'Yang Maha Pengampun',
        'Yang Maha Perkasa',
        'Yang Maha Bijaksana',
        'Yang Maha Melihat',
      ],
      ans: 0,
      exp: 'Al-Ghaffar berarti Yang Maha Pengampun, senantiasa menutupi dosa hamba-Nya yang bertaubat.',
    },
    {
      q: "Kalimat 'Laa haula wa laa quwwata illa billaah' terdapat dalam doa...",
      options: ['Masuk wc', 'Keluar rumah', 'Sebelum belajar', 'Sesudah wudhu'],
      ans: 1,
      exp: 'Hauqalah (tawakkal) merupakan bagian dari doa keluar rumah.',
    },
    {
      q: 'Apa nama surah yang tidak diawali dengan lafaz Bismillah?',
      options: ['At-Taubah', 'Al-Anfal', 'An-Naml', 'Al-Fath'],
      ans: 0,
      exp: 'Surah At-Taubah adalah satu-satunya surah yang tidak diawali basmalah karena membawa peringatan keras.',
    },
  ],
  doa: [
    {
      title: '1. Doa Pagi Hari',
      cat: 'Harian',
      ar: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      la: 'Allahumma bika ashbahna, wa bika amsaina, wa bika nahya, wa bika namutu, wa ilaikan nusyur.',
      id: 'Ya Allah, dengan rahmat-Mu kami memasuki waktu pagi dan petang, kami hidup dan mati, dan kepada-Mu tempat kembali.',
    },
    {
      title: '2. Doa Bangun Tidur',
      cat: 'Harian',
      ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
      la: "Alhamdu lillaahil ladzii ahyaana ba'da maa amaatana wa ilaihin nusyuur.",
      id: 'Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dikembalikan.',
    },
    {
      title: '3. Doa Sebelum Tidur',
      cat: 'Harian',
      ar: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ',
      la: 'Bismikallahumma ahyaa wa amuutu.',
      id: 'Dengan nama-Mu, ya Allah, aku hidup dan aku mati.',
    },
    {
      title: '4. Doa Mohon Mimpi Baik',
      cat: 'Tidur',
      ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ رُؤْيَا صَالِحَةً صَادِقَةً غَيْرَ كَاذِبَةٍ',
      la: "Allahumma inni as'aluka ru'yan shalihah shadiqah ghaira kadzibah.",
      id: 'Ya Allah, aku memohon mimpi yang baik, benar, dan tidak dusta.',
    },
    {
      title: '5. Doa Jika Mimpi Baik',
      cat: 'Tidur',
      ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      la: "Alhamdulillahi rabbil 'aalamiin.",
      id: 'Segala puji bagi Allah, Tuhan semesta alam. (Lalu ceritakan hanya pada orang yang menyayangi).',
    },
    {
      title: '6. Doa Mimpi Buruk',
      cat: 'Tidur',
      ar: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ',
      la: "A'uudzu bikalimaatillaahit taammaati min ghadhabihi wa 'iqaabihi wa syarri 'ibaadihi.",
      id: 'Aku berlindung dengan kalimat Allah yang sempurna dari murka-Nya, siksa-Nya, dan kejahatan hamba-hamba-Nya.',
    },
    {
      title: '7. Doa Mulai Aktivitas',
      cat: 'Harian',
      ar: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
      la: 'Bismillahirrahmanirrahim.',
      id: 'Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.',
    },
    {
      title: '8. Doa Masuk Kamar Mandi',
      cat: 'Adab',
      ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
      la: "Allaahumma inni a'uudzu bika minal khubutshi wal khabaa-its.",
      id: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.',
    },
    {
      title: '9. Doa Keluar Kamar Mandi',
      cat: 'Adab',
      ar: 'غُفْرَانَكَ',
      la: 'Ghufraanaka.',
      id: 'Aku memohon ampunan-Mu.',
    },
    {
      title: '10. Doa Melepas Pakaian',
      cat: 'Adab',
      ar: 'بِسْمِ اللَّهِ الَّذِي لَا إِلَهَ إِلَّا هُوَ',
      la: 'Bismillaahil ladzii laa ilaaha illaa huwa.',
      id: 'Dengan nama Allah yang tiada Tuhan selain Dia.',
    },
    {
      title: '11. Doa Memakai Pakaian',
      cat: 'Adab',
      ar: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      la: 'Alhamdulillahil ladzii kasaanii haadzaa wa razaqaniihi min ghairi haulin minnii wa laa quwwatin.',
      id: 'Segala puji bagi Allah yang memberi pakaian ini padaku tanpa daya dan kekuatan dariku.',
    },
    {
      title: '12. Doa Memakai Baju Baru',
      cat: 'Adab',
      ar: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ',
      la: 'Allahumma lakal hamdu anta kasautaniihi.',
      id: 'Ya Allah, hanya milik-Mu segala puji, Engkaulah yang memakaikan pakaian ini kepadaku.',
    },
    {
      title: '13. Doa Ketika Bercermin',
      cat: 'Adab',
      ar: 'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
      la: 'Allahumma kamaa hassanta khalqii fahassin khuluqii.',
      id: 'Ya Allah, sebagaimana Engkau telah membaguskan penciptaanku, maka baguskanlah pula akhlakku.',
    },
    {
      title: '14. Doa Sebelum Makan',
      cat: 'Makan',
      ar: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
      la: "Allaahumma baarik lanaa fiimaa razaqtana wa qinaa 'adzaaban naar.",
      id: 'Ya Allah, berkahilah rezeki yang telah Engkau berikan dan peliharalah kami dari siksa neraka.',
    },
    {
      title: '15. Doa Sesudah Makan',
      cat: 'Makan',
      ar: 'الحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
      la: "Alhamdu lillaahil ladzii ath'amanaa wa saqana wa ja'alanaa muslimiin.",
      id: 'Segala puji bagi Allah yang memberi makan dan minum, serta menjadikan kami muslim.',
    },
    {
      title: '16. Doa Keluar Rumah',
      cat: 'Perjalanan',
      ar: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      la: "Bismillaahi tawakkaltu 'alallahi, wa laa haula wa laa quwwata illa billaah.",
      id: 'Dengan nama Allah, aku bertawakal kepada Allah, tiada daya melainkan dengan pertolongan-Nya.',
    },
    {
      title: '17. Doa Naik Kendaraan',
      cat: 'Perjalanan',
      ar: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
      la: 'Subhaanal ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahu muqriniin.',
      id: 'Maha Suci Allah yang menundukkan kendaraan ini, padahal sebelumnya kami tidak mampu menguasainya.',
    },
    {
      title: '18. Doa Masuk Rumah',
      cat: 'Perlindungan',
      ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ',
      la: 'Allaahumma inni as-aluka khairal mauliji wa khairal makhraji.',
      id: 'Ya Allah, aku memohon sebaik-baik tempat masuk dan keluar.',
    },
    {
      title: '19. Doa Sebelum Wudhu',
      cat: 'Ibadah',
      ar: 'بِسْمِ اللَّهِ',
      la: 'Bismillah.',
      id: 'Dengan menyebut nama Allah.',
    },
    {
      title: '20. Doa Setelah Wudhu',
      cat: 'Ibadah',
      ar: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      la: "Asyhadu allaa ilaaha illallaahu wahdahu laa syariikalahu, wa asyhadu anna muhammadan 'abduhu wa rasuuluhu.",
      id: 'Aku bersaksi tiada Tuhan selain Allah yang Maha Esa tiada sekutu bagi-Nya, dan aku bersaksi Muhammad hamba dan utusan-Nya.',
    },
    {
      title: '21. Doa Masuk Masjid',
      cat: 'Ibadah',
      ar: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      la: 'Allahummaf tahlii abwaaba rahmatik.',
      id: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
    },
    {
      title: '22. Doa Keluar Masjid',
      cat: 'Ibadah',
      ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
      la: 'Allahumma inni as-aluka min fadhlik.',
      id: 'Ya Allah, sesungguhnya aku memohon karunia-Mu.',
    },
    {
      title: '23. Doa Setelah Adzan',
      cat: 'Ibadah',
      ar: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ',
      la: "Allahumma rabba haadzihid da'watit taammah, wash shalaatil qaa-imah, aati muhammadanil wasiilata wal fadhiilah.",
      id: 'Ya Allah, Tuhan pemilik panggilan yang sempurna dan shalat yang didirikan, berilah Nabi Muhammad wasilah dan keutamaan.',
    },
    {
      title: '24. Doa Usai Sholat Fardhu',
      cat: 'Ibadah',
      ar: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ',
      la: 'Astaghfirullah (3x).',
      id: 'Aku memohon ampun kepada Allah (dibaca 3 kali setelah salam).',
    },
    {
      title: '25. Doa Lancar Bicara',
      cat: 'Belajar',
      ar: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
      la: "Rabbisyrah lii shadrii wayassir lii amrii wahlul 'uqdatam min lisaanii yafqahuu qaulii.",
      id: 'Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku supaya mereka mengerti perkataanku.',
    },
    {
      title: '26. Doa Sebelum Belajar',
      cat: 'Belajar',
      ar: 'رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا',
      la: "Rabbi zidnii 'ilman warzuqnii fahman.",
      id: 'Ya Tuhanku, tambahkanlah ilmu kepadaku dan berilah aku pemahaman yang baik.',
    },
    {
      title: '27. Doa Selesai Belajar',
      cat: 'Belajar',
      ar: 'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',
      la: "Allahumma arinal haqqa haqqan warzuqnat tibaa'ahu.",
      id: 'Ya Allah, tunjukkanlah kepada kami yang benar itu benar dan berilah kami kemampuan mengikutinya.',
    },
    {
      title: '28. Doa Ilmu Bermanfaat',
      cat: 'Belajar',
      ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
      la: "Allaahumma inni as-aluka 'ilman naafi'an, wa rizqan thayyiban, wa 'amalan mutaqabbalan.",
      id: 'Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.',
    },
    {
      title: '29. Doa Pembuka Majelis',
      cat: 'Sosial',
      ar: 'إِنَّ الْحَمْدَ لِلَّهِ نَحْمَدُهُ وَنَسْتَعِينُهُ وَنَسْتَغْفِرُهُ',
      la: "Innal hamda lillaah nahmaduhu wa nasta'iinuhu wa nastaghfiruh.",
      id: 'Sesungguhnya segala puji bagi Allah. Kami memuji-Nya, memohon pertolongan dan ampunan-Nya.',
    },
    {
      title: '30. Doa Penutup Majelis',
      cat: 'Sosial',
      ar: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
      la: 'Subhaanakallahumma wa bihamdika, asyhadu allaa ilaaha illaa anta, astaghfiruka wa atuubu ilaik.',
      id: 'Maha Suci Engkau Ya Allah, aku bersaksi tiada Tuhan selain Engkau, aku memohon ampun dan bertaubat kepada-Mu.',
    },
    {
      title: '31. Doa Penenang Hati',
      cat: 'Permohonan',
      ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      la: "Allahumma inni a'uudzu bika minal hammi wal hazan.",
      id: 'Ya Allah, aku berlindung kepada-Mu dari rasa sedih dan gelisah.',
    },
    {
      title: '32. Doa Pembuka Rezeki',
      cat: 'Permohonan',
      ar: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ',
      la: "Allahummakfinii bihalaalika 'an haraamika.",
      id: 'Ya Allah, cukupkanlah aku dengan yang halal dari-Mu, sehingga terhindar dari yang haram.',
    },
    {
      title: '33. Doa Selamat Dunia Akhirat',
      cat: 'Permohonan',
      ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      la: "Rabbanaa aatinaa fid dunyaa hasanatan wa fil aakhirati hasanatan wa qinaa 'adzaaban naar.",
      id: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan di akhirat, serta lindungilah dari api neraka.',
    },
    {
      title: '34. Doa Kedua Orang Tua',
      cat: 'Permohonan',
      ar: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      la: 'Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shagiiraa.',
      id: 'Ya Tuhanku, ampunilah aku dan kedua orang tuaku, sayangilah mereka sebagaimana merawatku sewaktu kecil.',
    },
    {
      title: '35. Niat Puasa Ramadhan',
      cat: 'Ibadah',
      ar: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى',
      la: "Nawaitu shauma ghadin 'an adaa-i fardhi syahri ramadhaana haadzihis sanati lillaahi ta'aalaa.",
      id: "Aku berniat puasa esok hari untuk menunaikan fardhu bulan Ramadhan tahun ini karena Allah Ta'ala.",
    },
    {
      title: '36. Doa Turun Hujan',
      cat: 'Alam',
      ar: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
      la: "Allahumma shayyiban naafi'an.",
      id: 'Ya Allah, turunkanlah hujan yang bermanfaat.',
    },
    {
      title: '37. Doa Mendengar Petir',
      cat: 'Alam',
      ar: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',
      la: "Subhaanal ladzii yusabbihur ra'du bihamdihi wal malaa-ikatu min khiifatih.",
      id: 'Maha Suci Allah, yang petir bertasbih memuji-Nya dan malaikat juga karena takut kepada-Nya.',
    },
    {
      title: '38. Doa Minta Kesembuhan',
      cat: 'Kesehatan',
      ar: 'اللَّهُمَّ رَبَّ النَّاسِ، مُذْهِبَ الْبَاسِ، اشْفِ أَنْتَ الشَّافِي لاَ شَافِىَ إِلاَّ أَنْتَ',
      la: 'Allaahumma rabban naas, mudzhibal baasi, ishfi antas syaafi laa syafiya illaa anta.',
      id: 'Ya Allah, Tuhan manusia, hilangkanlah penyakit ini, sembuhkanlah karena Engkau Maha Penyembuh.',
    },
    {
      title: '39. Doa Untuk Orang Sakit',
      cat: 'Kesehatan',
      ar: 'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ',
      la: "As'alullahal 'azhiima rabbal 'arshil 'azhiimi an yashfiyak.",
      id: 'Aku memohon kepada Allah Yang Maha Agung, Tuhan Arsy yang megah, agar menyembuhkanmu.',
    },
    {
      title: '40. Doa Orang Meninggal',
      cat: 'Kesehatan',
      ar: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
      la: "Innaa lillaahi wa innaa ilaihi raaji'uun. Allahumma' jurnii fii mushiibatii wa akhlif lii khairan minhaa.",
      id: 'Sesungguhnya kami milik Allah dan kepada-Nya kami kembali. Ya Allah, berilah pahala dalam musibahku ini dan gantikan yang lebih baik.',
    },
  ],
  asmaulHusna: [
    { ar: 'الرَّحْمَنُ', la: 'Ar-Rahman', id: 'Yang Maha Pengasih' },
    { ar: 'الرَّحِيمُ', la: 'Ar-Rahim', id: 'Yang Maha Penyayang' },
    { ar: 'الْمَلِكُ', la: 'Al-Malik', id: 'Yang Maha Merajai' },
    { ar: 'الْقُدُّوسُ', la: 'Al-Quddus', id: 'Yang Maha Suci' },
    { ar: 'السَّلاَمُ', la: 'As-Salam', id: 'Yang Memberi Kesejahteraan' },
    { ar: 'الْمُؤْمِنُ', la: "Al-Mu'min", id: 'Yang Memberi Keamanan' },
    { ar: 'الْمُهَيْمِنُ', la: 'Al-Muhaimin', id: 'Yang Maha Pemelihara' },
    { ar: 'الْعَزِيزُ', la: 'Al-Aziz', id: 'Yang Maha Perkasa' },
    { ar: 'الْجَبَّارُ', la: 'Al-Jabbar', id: 'Yang Memiliki Kegagahan' },
    { ar: 'الْمُتَكَبِّرُ', la: 'Al-Mutakabbir', id: 'Yang Maha Megah' },
    { ar: 'الْخَالِقُ', la: 'Al-Khaliq', id: 'Yang Maha Pencipta' },
    { ar: 'الْبَارِئُ', la: "Al-Bari'", id: 'Yang Maha Melepaskan' },
    { ar: 'الْمُصَوِّرُ', la: 'Al-Musawwir', id: 'Yang Membentuk Rupa' },
    { ar: 'الْغَفَّارُ', la: 'Al-Ghaffar', id: 'Yang Maha Pengampun' },
    { ar: 'الْقَهَّارُ', la: 'Al-Qahhar', id: 'Yang Maha Memaksa' },
    { ar: 'الْوَهَّابُ', la: 'Al-Wahhab', id: 'Yang Pemberi Karunia' },
    { ar: 'الرَّزَّاقُ', la: 'Ar-Razzaq', id: 'Yang Pemberi Rezeki' },
    { ar: 'الْفَتَّاحُ', la: 'Al-Fattah', id: 'Yang Pembuka Rahmat' },
    { ar: 'الْعَلِيمُ', la: "Al-'Alim", id: 'Yang Maha Mengetahui' },
    { ar: 'الْقَابِضُ', la: 'Al-Qabidh', id: 'Yang Menyempitkan' },
    { ar: 'الْبَاسِطُ', la: 'Al-Basith', id: 'Yang Melapangkan' },
    { ar: 'الْخَافِضُ', la: 'Al-Khafidh', id: 'Yang Merendahkan' },
    { ar: 'الرَّافِعُ', la: "Ar-Rafi'", id: 'Yang Meninggikan' },
    { ar: 'الْمُعِزُّ', la: "Al-Mu'izz", id: 'Yang Memuliakan' },
    { ar: 'الْمُذِلُّ', la: 'Al-Mudhill', id: 'Yang Menghinakan' },
    { ar: 'السَّمِيعُ', la: "As-Sami'", id: 'Yang Maha Mendengar' },
    { ar: 'الْبَصِيرُ', la: 'Al-Bashir', id: 'Yang Maha Melihat' },
    { ar: 'الْحَكَمُ', la: 'Al-Hakam', id: 'Yang Menetapkan' },
    { ar: 'الْعَدْلُ', la: "Al-'Adl", id: 'Yang Maha Adil' },
    { ar: 'اللَّطِيفُ', la: 'Al-Lathif', id: 'Yang Maha Lembut' },
    { ar: 'الْخَبِيرُ', la: 'Al-Khabir', id: 'Yang Mengetahui Rahasia' },
    { ar: 'الْحَلِيمُ', la: 'Al-Halim', id: 'Yang Maha Penyantun' },
    { ar: 'الْعَظِيمُ', la: "Al-'Azhim", id: 'Yang Maha Agung' },
    { ar: 'الْغَفُورُ', la: 'Al-Ghafur', id: 'Yang Maha Pengampun' },
    { ar: 'الشَّكُورُ', la: 'As-Syakur', id: 'Yang Pembalas Budi' },
    { ar: 'الْعَلِيُّ', la: "Al-'Aliy", id: 'Yang Maha Tinggi' },
    { ar: 'الْكَبِيرُ', la: 'Al-Kabir', id: 'Yang Maha Besar' },
    { ar: 'الْحَفِيظُ', la: 'Al-Hafizh', id: 'Yang Maha Memelihara' },
    { ar: 'الْمُقِيتُ', la: 'Al-Muqit', id: 'Yang Pemberi Kecukupan' },
    { ar: 'الْحَسِيبُ', la: 'Al-Hasib', id: 'Yang Membuat Perhitungan' },
    { ar: 'الْجَلِيلُ', la: 'Al-Jalil', id: 'Yang Maha Mulia' },
    { ar: 'الْكَرِيمُ', la: 'Al-Karim', id: 'Yang Maha Pemurah' },
    { ar: 'الرَّقِيبُ', la: 'Ar-Raqib', id: 'Yang Maha Mengawasi' },
    { ar: 'الْمُجِيبُ', la: 'Al-Mujib', id: 'Yang Mengabulkan' },
    { ar: 'الْوَاسِعُ', la: "Al-Wasi'", id: 'Yang Maha Luas' },
    { ar: 'الْحَكِيمُ', la: 'Al-Hakim', id: 'Yang Maha Bijaksana' },
    { ar: 'الْوَدُودُ', la: 'Al-Wadud', id: 'Yang Maha Mengasihi' },
    { ar: 'الْمَجِيدُ', la: 'Al-Majid', id: 'Yang Maha Mulia' },
    { ar: 'الْبَاعِثُ', la: "Al-Ba'ith", id: 'Yang Membangkitkan' },
    { ar: 'الشَّهِيدُ', la: 'As-Syahid', id: 'Yang Menyaksikan' },
    { ar: 'الْحَقُّ', la: 'Al-Haqq', id: 'Yang Maha Benar' },
    { ar: 'الْوَكِيلُ', la: 'Al-Wakil', id: 'Yang Maha Memelihara' },
    { ar: 'الْقَوِيُّ', la: 'Al-Qawiyyu', id: 'Yang Maha Kuat' },
    { ar: 'الْمَتِينُ', la: 'Al-Matin', id: 'Yang Maha Kokoh' },
    { ar: 'الْوَلِيُّ', la: 'Al-Waliyy', id: 'Yang Melindungi' },
    { ar: 'الْحَمِيدُ', la: 'Al-Hamid', id: 'Yang Maha Terpuji' },
    { ar: 'الْمُحْصِي', la: 'Al-Muhshi', id: 'Yang Menghitung' },
    { ar: 'الْمُبْدِئُ', la: "Al-Mubdi'", id: 'Yang Maha Memulai' },
    { ar: 'الْمُعِيدُ', la: "Al-Mu'id", id: 'Yang Mengembalikan' },
    { ar: 'الْمُحْيِي', la: 'Al-Muhyi', id: 'Yang Menghidupkan' },
    { ar: 'الْمُمِيتُ', la: 'Al-Mumit', id: 'Yang Mematikan' },
    { ar: 'الْحَيُّ', la: 'Al-Hayyu', id: 'Yang Maha Hidup' },
    { ar: 'الْقَيُّومُ', la: 'Al-Qayyum', id: 'Yang Maha Mandiri' },
    { ar: 'الْوَاجِدُ', la: 'Al-Wajid', id: 'Yang Penemu' },
    { ar: 'الْمَاجِدُ', la: 'Al-Majid', id: 'Yang Maha Mulia' },
    { ar: 'الْوَاحِدُ', la: 'Al-Wahid', id: 'Yang Maha Tunggal' },
    { ar: 'الأَحَدُ', la: 'Al-Ahad', id: 'Yang Maha Esa' },
    { ar: 'الصَّمَدُ', la: 'As-Shamad', id: 'Yang Tempat Meminta' },
    { ar: 'الْقَادِرُ', la: 'Al-Qadir', id: 'Yang Menentukan' },
    { ar: 'الْمُقْتَدِرُ', la: 'Al-Muqtadir', id: 'Yang Berkuasa' },
    { ar: 'الْمُقَدِّمُ', la: 'Al-Muqaddim', id: 'Yang Mendahulukan' },
    { ar: 'الْمُؤَخِّرُ', la: "Al-Mu'akhkhir", id: 'Yang Mengakhirkan' },
    { ar: 'الأَوَّلُ', la: 'Al-Awwal', id: 'Yang Maha Awal' },
    { ar: 'الآخِرُ', la: 'Al-Akhir', id: 'Yang Maha Akhir' },
    { ar: 'الظَّاهِرُ', la: 'Az-Zhahir', id: 'Yang Maha Nyata' },
    { ar: 'الْبَاطِنُ', la: 'Al-Bathin', id: 'Yang Maha Ghaib' },
    { ar: 'الْوَالِي', la: 'Al-Wali', id: 'Yang Memerintah' },
    { ar: 'الْمُتَعَالِي', la: "Al-Muta'ali", id: 'Yang Maha Tinggi' },
    { ar: 'الْبَرُّ', la: 'Al-Barr', id: 'Yang Maha Penderma' },
    { ar: 'التَّوَّابُ', la: 'At-Tawwab', id: 'Yang Penerima Taubat' },
    { ar: 'الْمُنْتَقِمُ', la: 'Al-Muntaqim', id: 'Yang Pemberi Balasan' },
    { ar: 'الْعَفُوُّ', la: "Al-'Afuww", id: 'Yang Maha Pemaaf' },
    { ar: 'الرَّؤُوفُ', la: "Ar-Ra'uf", id: 'Yang Maha Pengasuh' },
    { ar: 'مَالِكُ الْمُلْكِ', la: 'Malikul Mulk', id: 'Penguasa Kerajaan' },
    {
      ar: 'ذُو الْجَلاَلِ وَالإِكْرَامِ',
      la: 'Dzul Jalaali Wal Ikraam',
      id: 'Pemilik Kemuliaan',
    },
    { ar: 'الْمُقْسِطُ', la: 'Al-Muqsit', id: 'Yang Pemberi Keadilan' },
    { ar: 'الْجَامِعُ', la: "Al-Jami'", id: 'Yang Mengumpulkan' },
    { ar: 'الْغَنِيُّ', la: 'Al-Ghaniyy', id: 'Yang Maha Kaya' },
    { ar: 'الْمُغْنِي', la: 'Al-Mughni', id: 'Yang Pemberi Kekayaan' },
    { ar: 'الْمَانِعُ', la: "Al-Mani'", id: 'Yang Maha Mencegah' },
    { ar: 'الضَّارُّ', la: 'Ad-Dharr', id: 'Pemberi Mudharat' },
    { ar: 'النَّافِعُ', la: "An-Nafi'", id: 'Pemberi Manfaat' },
    { ar: 'النُّورُ', la: 'An-Nur', id: 'Yang Bercahaya' },
    { ar: 'الْهَادِي', la: 'Al-Hadi', id: 'Pemberi Petunjuk' },
    { ar: 'الْبَدِيعُ', la: "Al-Badi'", id: 'Pencipta Tiada Banding' },
    { ar: 'الْبَاقِي', la: 'Al-Baqi', id: 'Yang Maha Kekal' },
    { ar: 'الْوَارِثُ', la: 'Al-Warits', id: 'Yang Maha Pewaris' },
    { ar: 'الرَّشِيدُ', la: 'Ar-Rasyid', id: 'Yang Maha Pandai' },
    { ar: 'الصَّبُورُ', la: 'As-Shabur', id: 'Yang Maha Sabar' },
  ],
}

const State = {
  data: {
    theme: 'dark',
    fontSize: 32,
    lastRead: null,
    bookmarks: [],
    notes: {},
    location: { lat: -6.2088, lng: 106.8456, name: 'Jakarta (Default)' },
    prayerTimes: null,
    isGPSActive: false,
    quiz: {
      date: null,
      questions: [],
      currentIdx: 0,
      score: 0,
      completed: false,
    },
  },
  intervals: {},
  compassHandler: null,
  init() {
    const saved = localStorage.getItem('myquran_data_v7')
    if (saved) this.data = { ...this.data, ...JSON.parse(saved) }
    this.applyTheme()
    this.applyFontSize()
    this.fetchRealtimePrayerTimes()
  },
  save() {
    localStorage.setItem('myquran_data_v7', JSON.stringify(this.data))
  },
  applyTheme() {
    document.documentElement.classList.toggle(
      'dark',
      this.data.theme === 'dark',
    )
  },
  applyFontSize() {
    document.documentElement.style.setProperty(
      '--arabic-size',
      `${this.data.fontSize}px`,
    )
  },
  async fetchRealtimePrayerTimes(forceLocationRefresh = false) {
    try {
      const { lat, lng } = this.data.location
      const dateStr = new Date().toISOString().split('T')[0]
      const res = await fetch(
        `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=20`,
      )
      const json = await res.json()
      if (json && json.code === 200) {
        this.data.prayerTimes = json.data.timings
        this.save()
        if (document.getElementById('prayer-container')) app.updatePrayerUI()
      }
      if (forceLocationRefresh) {
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`,
        )
        const geoJson = await geoRes.json()
        if (geoJson && geoJson.name) {
          this.data.location.name = geoJson.name
          this.save()
          if (document.getElementById('location-name-display'))
            document.getElementById('location-name-display').innerText =
              this.data.location.name
        }
      }
    } catch (e) {
      console.error('Gagal API Waktu Sholat', e)
    }
  },
}

const Utils = {
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container')
    const toast = document.createElement('div')
    const icon =
      type === 'success'
        ? 'check-circle'
        : type === 'error'
          ? 'x-circle'
          : 'info'
    const bgColor =
      type === 'success'
        ? 'bg-brand-500'
        : type === 'error'
          ? 'bg-red-500'
          : 'bg-gray-800'
    toast.className = `toast flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl text-white shadow-xl ${bgColor} font-medium text-xs sm:text-sm`
    toast.innerHTML = `<i class="ph-fill ph-${icon} text-lg sm:text-xl"></i> <span>${message}</span>`
    container.appendChild(toast)
    setTimeout(() => toast.classList.add('show'), 10)
    setTimeout(() => {
      toast.classList.remove('show')
      setTimeout(() => toast.remove(), 400)
    }, 3500)
  },
  showLoader(containerId, text = 'Memuat data...') {
    document.getElementById(containerId).innerHTML =
      `<div class="flex flex-col items-center justify-center py-20 sm:py-32 fade-in"><div class="w-10 h-10 sm:w-12 sm:h-12 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin"></div><p class="mt-4 sm:mt-5 text-xs sm:text-sm font-medium text-gray-500">${text}</p></div>`
  },
}

const API = {
  baseUrl: 'https://equran.id/api/v2',
  async getSurahList() {
    try {
      return (await (await fetch(`${this.baseUrl}/surat`)).json()).data
    } catch (e) {
      Utils.showToast('Gagal memuat Surat', 'error')
      return []
    }
  },
  async getSurahDetail(id) {
    try {
      return (await (await fetch(`${this.baseUrl}/surat/${id}`)).json()).data
    } catch (e) {
      Utils.showToast('Gagal memuat detail', 'error')
      return null
    }
  },
}

const audioManager = {
  player: document.getElementById('global-audio'),
  container: document.getElementById('audio-player'),
  btnPlayIcon: document.getElementById('icon-play-pause'),
  progress: document.getElementById('audio-progress'),
  currentTxt: document.getElementById('audio-current'),
  durationTxt: document.getElementById('audio-duration'),
  titleEl: document.getElementById('audio-title'),
  currentPlaylist: [],
  currentIndex: 0,
  isPlaying: false,
  init() {
    this.player.addEventListener('timeupdate', () => this.updateProgress())
    this.player.addEventListener('ended', () => this.playNext())
    this.player.addEventListener('loadedmetadata', () => {
      this.durationTxt.textContent = this.formatTime(this.player.duration)
    })
  },
  play(url, title, playlist = [], index = 0) {
    this.currentPlaylist = playlist
    this.currentIndex = index
    this.titleEl.textContent = title
    this.player.src = url
    this.player.play()
    this.isPlaying = true
    this.updateUI()
    this.show()
  },
  togglePlay() {
    if (!this.player.src) return
    this.isPlaying ? this.player.pause() : this.player.play()
    this.isPlaying = !this.isPlaying
    this.updateUI()
  },
  playNext() {
    if (
      this.currentPlaylist.length > 0 &&
      this.currentIndex < this.currentPlaylist.length - 1
    ) {
      this.currentIndex++
      const next = this.currentPlaylist[this.currentIndex]
      this.play(next.url, next.title, this.currentPlaylist, this.currentIndex)
    } else {
      this.isPlaying = false
      this.updateUI()
    }
  },
  updateProgress() {
    if (this.player.duration) {
      const percent = (this.player.currentTime / this.player.duration) * 100
      this.progress.style.width = `${percent}%`
      this.currentTxt.textContent = this.formatTime(this.player.currentTime)
    }
  },
  seek(e) {
    if (!this.player.duration) return
    const rect = document
      .getElementById('audio-progress-container')
      .getBoundingClientRect()
    this.player.currentTime =
      Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) *
      this.player.duration
  },
  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00'
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0')}`
  },
  updateUI() {
    this.btnPlayIcon.className = this.isPlaying
      ? 'ph-fill ph-pause text-2xl'
      : 'ph-fill ph-play text-2xl'
  },
  show() {
    this.container.classList.remove(
      'translate-y-full',
      'opacity-0',
      'pointer-events-none',
    )
  },
  close() {
    this.player.pause()
    this.isPlaying = false
    this.container.classList.add(
      'translate-y-full',
      'opacity-0',
      'pointer-events-none',
    )
  },
}

const Views = {
  async renderHome() {
    const content = document.getElementById('app-content')
    let lastReadHTML = `
                    <div class="glass-panel p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] btn-depth relative overflow-hidden group cursor-pointer hover-lift h-full flex flex-col justify-center border border-brand-500/10" onclick="app.navigate('surahList')">
                        <div class="absolute -right-8 -top-8 opacity-5 group-hover:scale-110 transition-transform duration-700"><i class="ph-fill ph-book-open text-[150px] sm:text-[180px]"></i></div>
                        <span class="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-brand-500 uppercase tracking-widest mb-2 sm:mb-3">Mulai Membaca</span>
                        <h3 class="font-display font-bold text-xl sm:text-3xl mb-3 sm:mb-4">Belum ada riwayat.</h3>
                        <div class="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">Buka Daftar Surat <i class="ph-bold ph-arrow-right"></i></div>
                    </div>`

    if (State.data.lastRead) {
      lastReadHTML = `
                        <div class="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] btn-depth relative overflow-hidden group cursor-pointer bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-xl shadow-brand-500/20 hover-lift h-full flex flex-col justify-center" onclick="app.navigate('surahDetail', ${State.data.lastRead.surahId}, ${State.data.lastRead.ayahNumber})">
                            <div class="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700"><i class="ph-fill ph-bookmark-simple text-[140px] sm:text-[160px]"></i></div>
                            <div class="relative z-10 flex flex-col h-full">
                                <div class="flex items-center gap-2 mb-2 sm:mb-3 text-white/80"><i class="ph-fill ph-clock-counter-clockwise"></i><span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Terakhir Dibaca</span></div>
                                <h3 class="font-display font-bold text-2xl sm:text-4xl mb-1">${State.data.lastRead.surahName}</h3>
                                <p class="text-brand-100 font-medium text-xs sm:text-sm mb-4 sm:mb-6">Ayat ke-${State.data.lastRead.ayahNumber}</p>
                                <div class="mt-auto"><span class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-white/30 transition-colors">Lanjutkan <i class="ph-bold ph-play"></i></span></div>
                            </div>
                        </div>`
    }

    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    content.innerHTML = `
                    <div class="fade-in max-w-4xl mx-auto">
                        <div class="flex justify-between items-end mb-6 sm:mb-8">
                            <div>
                                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-1 sm:mb-2">Assalamu'alaikum,</h2>
                                <p class="text-xs sm:text-sm lg:text-base text-gray-500 font-medium">${new Date().toLocaleDateString('id-ID', dateOptions)}</p>
                            </div>
                            <div class="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-panel items-center justify-center border border-white/20 relative">
                                <i class="ph-fill ph-moon-stars text-xl sm:text-2xl text-brand-500"></i>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                            <div class="h-56 sm:h-64 lg:h-72">${lastReadHTML}</div>
                            
                            <div class="glass-panel p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] h-56 sm:h-64 lg:h-72 flex flex-col justify-between hover-lift relative overflow-hidden">
                                <div class="flex justify-between items-start z-10">
                                    <div>
                                        <div class="flex items-center gap-2 mb-1">
                                            <h3 class="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Jadwal Sholat</h3>
                                            ${State.data.isGPSActive ? '<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span></span>' : ''}
                                        </div>
                                        <p class="font-display font-bold text-sm sm:text-lg flex items-center gap-1 sm:gap-1.5 line-clamp-1" id="location-name-display" title="${State.data.location.name}">
                                            <i class="ph-fill ph-map-pin text-brand-500 flex-shrink-0"></i> ${State.data.location.name}
                                        </p>
                                    </div>
                                    <button onclick="app.requestGeolocation()" class="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-brand-50 dark:bg-brand-500/10 text-brand-500 rounded-xl hover:scale-105 transition-transform" title="Perbarui GPS">
                                        <i class="ph-bold ph-crosshair text-base sm:text-lg"></i>
                                    </button>
                                </div>
                                <div class="z-10 mt-2 text-center" id="prayer-countdown-container">
                                    <p class="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1">Menuju <span id="next-prayer-name" class="text-brand-500 font-bold">...</span></p>
                                    <p class="font-mono text-2xl sm:text-4xl font-bold tracking-tight" id="prayer-countdown">--:--:--</p>
                                </div>
                                <div class="z-10 bg-gray-100/50 dark:bg-black/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex justify-between items-center shadow-inner mt-2 sm:mt-4 overflow-x-auto gap-2" id="prayer-container"></div>
                            </div>
                        </div>

                        <h3 class="font-display font-bold text-lg sm:text-xl mb-4 sm:mb-5">Eksplorasi</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            ${[
                              {
                                id: 'surahList',
                                icon: 'book-open',
                                color: 'brand',
                                label: 'Al-Quran',
                                action: "app.navigate('surahList')",
                              },
                              {
                                id: 'doaHarian',
                                icon: 'hands-praying',
                                color: 'blue',
                                label: 'Doa Harian',
                                action: "app.navigate('doaHarian')",
                              },
                              {
                                id: 'asmaulHusna',
                                icon: 'sparkle',
                                color: 'amber',
                                label: 'Asmaul Husna',
                                action: "app.navigate('asmaulHusna')",
                              },
                              {
                                id: 'quiz',
                                icon: 'question',
                                color: 'purple',
                                label: 'Kuis Harian',
                                action: "app.navigate('quiz')",
                              },
                            ]
                              .map(
                                (item) => `
                                <button onclick="${item.action}" class="glass-panel p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-3 sm:gap-4 hover-lift group border border-transparent hover:border-${item.color}-500/20">
                                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-500/10 text-${item.color}-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <i class="ph-fill ph-${item.icon} text-xl sm:text-2xl"></i>
                                    </div>
                                    <span class="font-semibold text-xs sm:text-sm text-center">${item.label}</span>
                                </button>
                            `,
                              )
                              .join('')}
                        </div>
                    </div>
                `
    app.updatePrayerUI()
    app.startClock()
  },

  renderSurahList() {
    const content = document.getElementById('app-content')
    Utils.showLoader('app-content')
    API.getSurahList().then((surahs) => {
      content.innerHTML = `
                        <div class="fade-in max-w-5xl mx-auto pb-6">
                            <div class="sticky top-[72px] lg:top-0 pt-2 pb-4 sm:pb-6 bg-[#f4f4f5] dark:bg-[#09090b] z-20">
                                <h2 class="text-2xl sm:text-3xl font-display font-bold mb-4 hidden lg:block">Daftar Surat</h2>
                                <div class="relative max-w-2xl mx-auto lg:mx-0">
                                    <i class="ph-bold ph-magnifying-glass absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                    <input type="text" id="search-surah" placeholder="Cari surat..." class="w-full glass-panel py-3 sm:py-4 pl-12 sm:pl-14 pr-4 sm:pr-5 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-brand-500/50 bg-white/50 dark:bg-black/20 text-xs sm:text-sm placeholder-gray-400 shadow-sm border-white/30 dark:border-white/5">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" id="surah-grid">
                                ${surahs
                                  .map(
                                    (surah) => `
                                    <div class="glass-panel p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center justify-between cursor-pointer hover-lift surah-card border border-transparent hover:border-brand-500/20" data-name="${surah.namaLatin.toLowerCase()}" onclick="app.navigate('surahDetail', ${surah.nomor})">
                                        <div class="flex items-center gap-3 sm:gap-4">
                                            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center relative"><span class="font-bold text-xs sm:text-sm">${surah.nomor}</span></div>
                                            <div>
                                                <h3 class="font-display font-bold text-base sm:text-lg">${surah.namaLatin}</h3>
                                                <p class="text-[9px] sm:text-[11px] font-semibold text-gray-400 uppercase mt-0.5 sm:mt-1">${surah.tempatTurun} • ${surah.jumlahAyat} Ayat</p>
                                            </div>
                                        </div>
                                        <div class="text-xl sm:text-2xl font-arabic text-brand-600 dark:text-brand-400">${surah.nama}</div>
                                    </div>
                                `,
                                  )
                                  .join('')}
                            </div>
                        </div>
                    `
      document.getElementById('search-surah').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase()
        document
          .querySelectorAll('.surah-card')
          .forEach(
            (c) =>
              (c.style.display = c.dataset.name.includes(term)
                ? 'flex'
                : 'none'),
          )
      })
    })
  },

  async renderSurahDetail(surahId, scrollToAyah = null) {
    const content = document.getElementById('app-content')
    Utils.showLoader('app-content')
    const surah = await API.getSurahDetail(surahId)
    if (!surah) {
      app.navigate('surahList')
      return
    }
    const playlist = surah.ayat.map((a) => ({
      url: a.audio['05'],
      title: `${surah.namaLatin} - Ayat ${a.nomorAyat}`,
    }))

    content.innerHTML = `
                    <div class="fade-in max-w-3xl mx-auto pb-10">
                        <div class="sticky top-[72px] lg:top-0 bg-[#f4f4f5]/90 dark:bg-[#09090b]/90 backdrop-blur-xl z-20 py-3 sm:py-4 mb-6 sm:mb-8 flex items-center justify-between px-1 sm:px-2">
                            <button onclick="app.navigate('surahList')" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300 transition-colors"><i class="ph-bold ph-arrow-left text-base sm:text-lg"></i></button>
                            <div class="text-center">
                                <h2 class="font-display font-bold text-lg sm:text-xl">${surah.namaLatin}</h2>
                                <p class="text-[9px] sm:text-[11px] font-semibold text-gray-500 uppercase mt-0.5">${surah.arti} • ${surah.jumlahAyat} Ayat</p>
                            </div>
                            <button onclick="audioManager.play('${surah.audioFull['05']}', 'Murottal ${surah.namaLatin}')" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-500 hover:scale-105 transition-transform"><i class="ph-fill ph-play text-base sm:text-lg"></i></button>
                        </div>
                        
                        ${surahId !== 9 ? `<div class="text-center py-8 sm:py-12 mb-6 sm:mb-10"><p class="font-arabic text-3xl sm:text-4xl lg:text-5xl text-brand-600 dark:text-brand-400 leading-loose">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p></div>` : ''}
                        
                        <div class="space-y-6 sm:space-y-8" id="ayah-container">
                            ${surah.ayat
                              .map(
                                (ayah, index) => `
                                <div class="glass-panel p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] relative slide-up border border-transparent hover:border-brand-500/20" style="animation-delay: ${Math.min(index * 0.03, 0.5)}s" id="ayah-${ayah.nomorAyat}">
                                    <div class="flex justify-between items-start mb-4 sm:mb-6">
                                        <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center font-bold text-xs sm:text-sm shadow-inner">${ayah.nomorAyat}</div>
                                        <div class="flex gap-1.5 sm:gap-2 bg-gray-50/50 dark:bg-black/20 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl">
                                            <button onclick="app.playAyah('${ayah.audio['05']}', '${surah.namaLatin} - Ayat ${ayah.nomorAyat}', ${encodeURIComponent(JSON.stringify(playlist))}, ${index})" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg sm:rounded-xl text-gray-400 hover:text-brand-500 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"><i class="ph-fill ph-play text-xs sm:text-sm"></i></button>
                                            <button onclick="app.setLastRead(${surahId}, ${ayah.nomorAyat}, '${surah.namaLatin}')" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg sm:rounded-xl text-gray-400 hover:text-brand-500 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"><i class="ph-fill ph-flag-banner text-xs sm:text-sm"></i></button>
                                        </div>
                                    </div>
                                    <div class="arabic-text font-arabic text-right mb-6 sm:mb-8 text-gray-900 dark:text-white" style="font-size: var(--arabic-size, 32px);">${ayah.teksArab}</div>
                                    <div class="space-y-3 sm:space-y-4 border-t border-gray-100 dark:border-white/5 pt-4 sm:pt-6">
                                        <p class="text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400">${ayah.teksLatin}</p>
                                        <p class="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">${ayah.teksIndonesia}</p>
                                    </div>
                                </div>
                            `,
                              )
                              .join('')}
                        </div>
                    </div>
                `
    if (scrollToAyah)
      setTimeout(() => {
        const el = document.getElementById(`ayah-${scrollToAyah}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          el.classList.add('ring-2', 'ring-brand-500')
        }
      }, 600)
  },

  renderQuizScreen() {
    const content = document.getElementById('app-content')
    const today = new Date().toISOString().split('T')[0]
    let qs = State.data.quiz

    if (qs.date !== today) {
      const shuffled = [...Database.quiz].sort(() => 0.5 - Math.random())
      qs.date = today
      qs.questions = shuffled.slice(0, 5)
      qs.currentIdx = 0
      qs.score = 0
      qs.completed = false
      State.save()
    }

    if (qs.completed) {
      content.innerHTML = `
                        <div class="fade-in min-h-[60vh] flex flex-col items-center justify-center max-w-lg mx-auto py-10 px-4 text-center">
                            <div class="w-20 h-20 sm:w-24 sm:h-24 bg-brand-50 dark:bg-brand-500/10 text-brand-500 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mb-5 sm:mb-6 shadow-inner">
                                <i class="ph-fill ph-medal text-4xl sm:text-5xl"></i>
                            </div>
                            <h2 class="font-display font-bold text-2xl sm:text-3xl mb-2">Kuis Selesai!</h2>
                            <p class="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">Tugas harian selesai, kembali besok untuk soal baru.</p>
                            
                            <div class="glass-panel p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] w-full border border-brand-500/20 mb-6 sm:mb-8">
                                <p class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">Total Skor Anda</p>
                                <p class="font-mono text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">${qs.score} <span class="text-xl sm:text-2xl text-gray-400">/ 10</span></p>
                                <p class="text-xs sm:text-sm font-semibold">${qs.score >= 8 ? 'Luar Biasa! Pemahaman yang sangat baik.' : qs.score >= 4 ? 'Bagus! Terus tingkatkan hafalan.' : 'Tetap semangat! Belajar lagi besok.'}</p>
                            </div>
                            <button onclick="app.navigate('home')" class="w-full sm:w-auto px-8 py-3.5 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 transition-colors font-bold rounded-xl text-sm">Kembali ke Beranda</button>
                        </div>
                    `
      return
    }

    const q = qs.questions[qs.currentIdx]
    const progressWidth = (qs.currentIdx / 5) * 100

    content.innerHTML = `
                    <div class="fade-in max-w-2xl mx-auto pt-2 sm:pt-4 pb-12">
                        <div class="flex items-center justify-between mb-6 sm:mb-8">
                            <button onclick="app.navigate('home')" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl glass-panel hover:bg-gray-300 dark:hover:bg-white/20"><i class="ph-bold ph-arrow-left text-sm sm:text-lg"></i></button>
                            <h2 class="text-base sm:text-lg font-display font-bold">Kuis Harian</h2>
                            <div class="w-9 sm:w-10 text-center font-bold text-brand-500 font-mono text-xs sm:text-sm">${qs.currentIdx + 1}/5</div>
                        </div>

                        <div class="w-full h-1.5 bg-gray-200 dark:bg-white/5 rounded-full mb-6 sm:mb-8 overflow-hidden"><div class="h-full bg-brand-500 rounded-full transition-all duration-500" style="width: ${progressWidth}%"></div></div>
                        
                        <div class="glass-panel p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] mb-5 sm:mb-6 shadow-sm border border-transparent">
                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-brand-50 dark:bg-brand-500/10 text-brand-500 px-3 py-1 rounded-full mb-3 sm:mb-4 inline-block">Pertanyaan ${qs.currentIdx + 1}</span>
                            <h3 class="font-display font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">${q.q}</h3>
                        </div>

                        <div class="space-y-3" id="quiz-options">
                            ${q.options
                              .map(
                                (opt, i) => `
                                <button onclick="app.answerQuiz(${i})" class="quiz-btn w-full text-left p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-panel font-medium text-xs sm:text-sm hover:border-brand-500/50 hover:bg-white/50 dark:hover:bg-white/5 transition-all outline-none" data-idx="${i}">
                                    <span class="font-bold text-gray-400 mr-2 sm:mr-3">${String.fromCharCode(65 + i)}.</span> ${opt}
                                </button>
                            `,
                              )
                              .join('')}
                        </div>

                        <div id="quiz-explanation" class="hidden slide-up glass-panel p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] mt-6 border border-blue-500/30 bg-blue-50/50 dark:bg-blue-900/10">
                            <div class="flex items-start gap-3">
                                <i class="ph-fill ph-info text-xl sm:text-2xl text-blue-500 mt-1 flex-shrink-0"></i>
                                <div>
                                    <h4 class="font-bold text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1.5 sm:mb-2 uppercase tracking-widest">Pembahasan</h4>
                                    <p class="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">${q.exp}</p>
                                </div>
                            </div>
                            <button onclick="app.nextQuizQuestion()" class="mt-5 sm:mt-6 w-full py-3 sm:py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg transition-colors text-xs sm:text-sm">
                                ${qs.currentIdx === 4 ? 'Lihat Hasil Akhir' : 'Lanjut ke Soal Berikutnya'}
                            </button>
                        </div>
                    </div>
                `
  },

  renderAsmaulHusna() {
    const content = document.getElementById('app-content')
    content.innerHTML = `
                    <div class="fade-in max-w-5xl mx-auto pb-10">
                        <div class="sticky top-[72px] lg:top-0 bg-[#f4f4f5]/90 dark:bg-[#09090b]/90 backdrop-blur-xl z-20 py-3 sm:py-4 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 px-1 sm:px-2">
                            <button onclick="app.navigate('home')" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300 transition-colors"><i class="ph-bold ph-arrow-left text-sm sm:text-lg"></i></button>
                            <div>
                                <h2 class="text-xl sm:text-2xl font-display font-bold">Asmaul Husna</h2>
                                <p class="text-[9px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Lengkap 99 Nama Allah</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                            ${Database.asmaulHusna
                              .map(
                                (item, index) => `
                                <div class="glass-panel p-4 sm:p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] text-center slide-up hover-lift border border-transparent hover:border-amber-500/30 relative overflow-hidden" style="animation-delay: ${Math.min(index * 0.015, 0.4)}s">
                                    <div class="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/10 rounded-bl-[1.25rem] sm:rounded-bl-[1.5rem] flex items-start justify-end p-2 sm:p-2.5">
                                        <span class="text-[9px] sm:text-[10px] font-bold text-amber-600 dark:text-amber-400 opacity-80">${index + 1}</span>
                                    </div>
                                    <div class="text-2xl sm:text-3xl font-arabic text-amber-500 mb-3 sm:mb-4 mt-2" style="line-height: 1.6;">${item.ar}</div>
                                    <h3 class="font-bold font-display text-sm sm:text-base">${item.la}</h3>
                                    <p class="text-[9px] sm:text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1.5 sm:mt-2 line-clamp-2" title="${item.id}">${item.id}</p>
                                </div>
                            `,
                              )
                              .join('')}
                        </div>
                    </div>
                `
  },

  renderDoaHarian() {
    const content = document.getElementById('app-content')
    content.innerHTML = `
                    <div class="fade-in max-w-5xl mx-auto pb-10">
                        <div class="sticky top-[72px] lg:top-0 bg-[#f4f4f5]/90 dark:bg-[#09090b]/90 backdrop-blur-xl z-20 py-3 sm:py-4 mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 px-1 sm:px-2">
                            <div class="flex items-center gap-3 sm:gap-4">
                                <button onclick="app.navigate('home')" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300 transition-colors flex-shrink-0"><i class="ph-bold ph-arrow-left text-sm sm:text-lg"></i></button>
                                <div>
                                    <h2 class="text-xl sm:text-2xl font-display font-bold">Doa Harian</h2>
                                    <p class="text-[9px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-widest mt-0.5">Koleksi 40 Doa Lengkap</p>
                                </div>
                            </div>
                            <div class="relative w-full sm:w-64 lg:w-72">
                                <i class="ph-bold ph-magnifying-glass absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="search-doa" placeholder="Cari doa..." class="w-full glass-panel py-2.5 sm:py-3 pl-9 sm:pl-11 pr-3 sm:pr-4 rounded-xl outline-none focus:ring-2 focus:ring-brand-500/50 bg-white/50 dark:bg-black/20 text-xs sm:text-sm placeholder-gray-400 shadow-sm">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4" id="doa-grid">
                            ${Database.doa
                              .map(
                                (doa, index) => `
                                <div class="glass-panel p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] flex flex-col justify-between hover-lift doa-card group cursor-pointer border border-transparent hover:border-brand-500/30" data-title="${doa.title.toLowerCase()}" onclick="app.showDoaDetail('${encodeURIComponent(JSON.stringify(doa))}')">
                                    <div>
                                        <div class="flex justify-between items-start mb-2 sm:mb-3">
                                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400">${doa.cat}</span>
                                            <i class="ph-bold ph-arrow-up-right text-gray-400 group-hover:text-brand-500 transition-colors text-sm"></i>
                                        </div>
                                        <h3 class="font-display font-bold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-brand-500 transition-colors">${doa.title}</h3>
                                        <p class="arabic-text text-right text-lg sm:text-xl font-arabic line-clamp-2 text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">${doa.ar}</p>
                                    </div>
                                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 line-clamp-2 italic">${doa.id}</p>
                                </div>
                            `,
                              )
                              .join('')}
                        </div>
                    </div>
                `
    document.getElementById('search-doa').addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase()
      document
        .querySelectorAll('.doa-card')
        .forEach(
          (c) =>
            (c.style.display = c.dataset.title.includes(term)
              ? 'flex'
              : 'none'),
        )
    })
  },

  renderSettings() {
    const content = document.getElementById('app-content')
    const lastReadText = State.data.lastRead
      ? `${State.data.lastRead.surahName} (Ayat ${State.data.lastRead.ayahNumber})`
      : 'Belum ada riwayat'
    const quizScore = State.data.quiz.score || 0

    content.innerHTML = `
                    <div class="fade-in max-w-4xl mx-auto pb-10">
                        <div class="sticky top-[72px] lg:top-0 bg-[#f4f4f5]/90 dark:bg-[#09090b]/90 backdrop-blur-xl z-20 py-3 sm:py-4 mb-6 sm:mb-8 px-1 sm:px-2">
                            <h2 class="text-2xl sm:text-3xl font-display font-bold">Profil & Sinkronisasi</h2>
                        </div>

                        <!-- Progress Section -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div class="glass-panel p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] hover-lift">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-500 flex items-center justify-center"><i class="ph-fill ph-book-open"></i></div>
                                    <h3 class="font-bold text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Terakhir Baca</h3>
                                </div>
                                <p class="font-display font-bold text-lg sm:text-xl line-clamp-1 mt-2">${lastReadText}</p>
                            </div>
                            <div class="glass-panel p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] hover-lift">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 flex items-center justify-center"><i class="ph-fill ph-medal"></i></div>
                                    <h3 class="font-bold text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Skor Kuis Hari Ini</h3>
                                </div>
                                <p class="font-display font-bold text-2xl sm:text-3xl mt-2 text-amber-500">${quizScore} <span class="text-xs sm:text-sm text-gray-400 font-medium">Poin</span></p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <!-- Backup & Restore JSON -->
                            <div class="glass-panel p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem]">
                                <h3 class="font-display font-bold text-lg sm:text-xl mb-1 flex items-center gap-2"><i class="ph-fill ph-hard-drives text-brand-500"></i> File Backup (JSON)</h3>
                                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-5 sm:mb-6">Simpan atau pulihkan file data Anda.</p>
                                <div class="space-y-3 sm:space-y-4">
                                    <button onclick="app.exportDataJSON()" class="w-full flex justify-between items-center px-4 py-3 sm:px-5 sm:py-4 bg-white/50 dark:bg-black/20 hover:bg-brand-50 dark:hover:bg-brand-500/10 text-left rounded-xl transition-colors border border-transparent hover:border-brand-500/30 group">
                                        <div><p class="font-bold text-xs sm:text-sm group-hover:text-brand-500">Ekspor Data (.json)</p></div>
                                        <i class="ph-bold ph-download-simple text-gray-400 group-hover:text-brand-500 text-lg sm:text-xl"></i>
                                    </button>
                                    <div class="relative w-full flex justify-between items-center px-4 py-3 sm:px-5 sm:py-4 bg-white/50 dark:bg-black/20 hover:bg-blue-50 dark:hover:bg-blue-500/10 text-left rounded-xl transition-colors border border-transparent hover:border-blue-500/30 group cursor-pointer overflow-hidden">
                                        <div><p class="font-bold text-xs sm:text-sm group-hover:text-blue-500">Impor Data (.json)</p></div>
                                        <i class="ph-bold ph-upload-simple text-gray-400 group-hover:text-blue-500 text-lg sm:text-xl"></i>
                                        <input type="file" id="import-json" accept=".json" onchange="app.importDataJSON(event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                                    </div>
                                </div>
                            </div>

                            <!-- Pindah Perangkat QR -->
                            <div class="glass-panel p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem]">
                                <h3 class="font-display font-bold text-lg sm:text-xl mb-1 flex items-center gap-2"><i class="ph-fill ph-qr-code text-purple-500"></i> Pindah HP Baru (QR)</h3>
                                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-5 sm:mb-6">Transfer data offline cepat menggunakan kamera.</p>
                                <div class="space-y-3 sm:space-y-4">
                                    <button onclick="app.showGenerateQRModal()" class="w-full flex justify-between items-center px-4 py-3 sm:px-5 sm:py-4 bg-white/50 dark:bg-black/20 hover:bg-purple-50 dark:hover:bg-purple-500/10 text-left rounded-xl transition-colors border border-transparent hover:border-purple-500/30 group">
                                        <div><p class="font-bold text-xs sm:text-sm group-hover:text-purple-500">Tampilkan QR Code (HP Lama)</p></div>
                                        <i class="ph-bold ph-qr-code text-gray-400 group-hover:text-purple-500 text-lg sm:text-xl"></i>
                                    </button>
                                    <button onclick="app.showScannerModal()" class="w-full flex justify-between items-center px-4 py-3 sm:px-5 sm:py-4 bg-white/50 dark:bg-black/20 hover:bg-brand-50 dark:hover:bg-brand-500/10 text-left rounded-xl transition-colors border border-transparent hover:border-brand-500/30 group">
                                        <div><p class="font-bold text-xs sm:text-sm group-hover:text-brand-500">Scan QR Code (HP Baru)</p></div>
                                        <i class="ph-bold ph-scan text-gray-400 group-hover:text-brand-500 text-lg sm:text-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 sm:mt-8 glass-panel p-5 sm:p-6 rounded-[1.5rem] border border-red-500/20 bg-red-50/50 dark:bg-red-900/10 flex items-center justify-between">
                            <div><h3 class="font-bold text-red-600 dark:text-red-400 text-xs sm:text-sm">Hapus Semua Data</h3><p class="text-[10px] sm:text-xs text-gray-500">Tindakan ini tidak dapat dibatalkan.</p></div>
                            <button onclick="app.confirmReset()" class="px-4 py-2 sm:px-5 sm:py-2.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg sm:rounded-xl text-xs sm:text-sm transition-colors shadow-md">Reset</button>
                        </div>
                    </div>
                `
  },
}

const app = {
  html5QrcodeScanner: null,
  init() {
    State.init()
    audioManager.init()
    this.renderNavigation()
    this.navigate('home')
  },
  renderNavigation() {
    const navItems = [
      { id: 'home', icon: 'house', label: 'Beranda' },
      { id: 'surahList', icon: 'book-open', label: 'Al-Quran' },
      { id: 'quiz', icon: 'question', label: 'Kuis' },
      { id: 'settings', icon: 'user', label: 'Profil' }, // Mengubah label setting
    ]
    const renderItem = (item, isDesktop) =>
      `<button onclick="app.navigate('${item.id}')" class="nav-btn ${isDesktop ? 'w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm' : 'flex flex-col items-center justify-center w-16 h-14 rounded-2xl'} text-gray-400 hover:text-brand-500 font-medium transition-all" data-target="${item.id}"><i class="ph-fill ph-${item.icon} text-xl sm:text-2xl mb-0.5 lg:mb-0"></i><span class="${isDesktop ? '' : 'text-[10px] font-semibold'}">${item.label}</span></button>`
    document.getElementById('desktop-nav').innerHTML = navItems
      .map((i) => renderItem(i, true))
      .join('')
    document.getElementById('mobile-nav').innerHTML = navItems
      .map((i) => renderItem(i, false))
      .join('')
  },
  updateNavState(activeId) {
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      const target = btn.dataset.target
      const isActive =
        target === activeId ||
        (activeId === 'surahDetail' && target === 'surahList')
      btn.className = btn.className
        .replace(
          /text-brand-600|dark:text-brand-400|bg-brand-50|dark:bg-brand-500\/10|font-bold/g,
          '',
        )
        .trim()
      if (isActive)
        btn.classList.add(
          'text-brand-600',
          'dark:text-brand-400',
          'bg-brand-50',
          'dark:bg-brand-500/10',
          'font-bold',
        )
    })
  },
  navigate(view, ...args) {
    window.scrollTo(0, 0)
    this.updateNavState(view)
    this.stopClock()
    this.closeScannerModal()
    if (view === 'home') Views.renderHome()
    else if (view === 'surahList') Views.renderSurahList()
    else if (view === 'surahDetail') Views.renderSurahDetail(...args)
    else if (view === 'quiz') Views.renderQuizScreen()
    else if (view === 'asmaulHusna') Views.renderAsmaulHusna()
    else if (view === 'doaHarian') Views.renderDoaHarian()
    else if (view === 'settings') Views.renderSettings()
  },
  toggleTheme() {
    State.data.theme = State.data.theme === 'dark' ? 'light' : 'dark'
    State.save()
    State.applyTheme()
  },

  // Kuis Logic
  answerQuiz(selectedIndex) {
    const qs = State.data.quiz
    const currentQuestion = qs.questions[qs.currentIdx]
    const btns = document.querySelectorAll('.quiz-btn')
    btns.forEach((btn) => btn.classList.add('option-disabled'))
    if (selectedIndex === currentQuestion.ans) {
      State.data.quiz.score += 2
      btns[selectedIndex].classList.add('option-correct')
      Utils.showToast('+2 Poin! Benar', 'success')
    } else {
      btns[selectedIndex].classList.add('option-wrong')
      btns[currentQuestion.ans].classList.add('!border-brand-500', '!border-2')
      Utils.showToast('Jawaban Salah', 'error')
    }
    State.save()
    document.getElementById('quiz-explanation').classList.remove('hidden')
    document
      .getElementById('quiz-explanation')
      .scrollIntoView({ behavior: 'smooth', block: 'end' })
  },
  nextQuizQuestion() {
    State.data.quiz.currentIdx++
    if (State.data.quiz.currentIdx >= 5) State.data.quiz.completed = true
    State.save()
    this.navigate('quiz')
  },

  // Doa Modal
  showDoaDetail(encodedDoa) {
    const doa = JSON.parse(decodeURIComponent(encodedDoa))
    const overlay = document.getElementById('modal-overlay')
    const content = document.getElementById('modal-content')
    content.innerHTML = `
                    <div class="flex justify-between items-start mb-5 sm:mb-6">
                        <div>
                            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-2 inline-block">${doa.cat}</span>
                            <h3 class="font-display font-bold text-xl sm:text-2xl">${doa.title}</h3>
                        </div>
                        <button onclick="document.getElementById('modal-overlay').classList.add('hidden')" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 dark:bg-white/10 rounded-full hover:text-red-500 transition-colors"><i class="ph-bold ph-x text-xs sm:text-sm"></i></button>
                    </div>
                    <div class="space-y-4 sm:space-y-6">
                        <div class="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center bg-brand-50/20 dark:bg-black/20">
                            <p class="arabic-text text-2xl sm:text-3xl font-arabic text-brand-600 dark:text-brand-400 leading-loose">${doa.ar}</p>
                        </div>
                        <div><h4 class="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Latin</h4><p class="text-xs sm:text-sm font-semibold text-brand-500 italic">${doa.la}</p></div>
                        <div><h4 class="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Artinya</h4><p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${doa.id}</p></div>
                    </div>
                    <button onclick="document.getElementById('modal-overlay').classList.add('hidden')" class="mt-6 sm:mt-8 w-full py-3 sm:py-3.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg">Tutup</button>
                `
    overlay.classList.remove('hidden')
    overlay.style.display = 'flex'
    setTimeout(() => {
      overlay.classList.remove('opacity-0')
      content.classList.remove('scale-95')
    }, 10)
  },

  // Sholat Engine
  updatePrayerUI() {
    const pt = State.data.prayerTimes
    const container = document.getElementById('prayer-container')
    if (!pt || !container) return
    const keys = [
      { k: 'Fajr', l: 'Subuh' },
      { k: 'Dhuhr', l: 'Dzuhur' },
      { k: 'Asr', l: 'Ashar' },
      { k: 'Maghrib', l: 'Maghrib' },
      { k: 'Isha', l: 'Isya' },
    ]
    const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes()
    let nextIdx = -1
    const timesMin = keys.map((i) => {
      const [h, m] = (pt[i.k] || '00:00').split(':').map(Number)
      return h * 60 + m
    })
    for (let i = 0; i < timesMin.length; i++)
      if (currentMinutes < timesMin[i]) {
        nextIdx = i
        break
      }
    if (nextIdx === -1) nextIdx = 0
    container.innerHTML = keys
      .map((item, idx) => {
        const isNext = idx === nextIdx
        return `<div class="flex flex-col items-center flex-shrink-0 min-w-[3rem] sm:min-w-[3.5rem] ${isNext ? 'scale-110 transform' : 'opacity-70'}"><span class="text-[9px] sm:text-[10px] font-semibold mb-1 ${isNext ? 'text-brand-500' : 'text-gray-400'}">${item.l}</span><span class="font-display font-bold ${isNext ? 'text-brand-500 text-base sm:text-lg' : 'text-xs sm:text-sm'}">${pt[item.k]}</span>${isNext ? '<div class="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1 sm:mt-1.5 shadow-[0_0_8px_#10b981]"></div>' : ''}</div>`
      })
      .join('')
    const countdownEl = document.getElementById('prayer-countdown')
    if (countdownEl) {
      document.getElementById('next-prayer-name').innerText = keys[nextIdx].l
      countdownEl.dataset.targetTime = pt[keys[nextIdx].k]
      countdownEl.dataset.isTomorrow =
        nextIdx === 0 && currentMinutes > timesMin[4] ? 'true' : 'false'
    }
  },
  startClock() {
    if (State.intervals.clock) clearInterval(State.intervals.clock)
    State.intervals.clock = setInterval(() => {
      const countdownEl = document.getElementById('prayer-countdown')
      if (!countdownEl || !countdownEl.dataset.targetTime) return
      const now = new Date()
      const [tH, tM] = countdownEl.dataset.targetTime.split(':').map(Number)
      let target = new Date()
      target.setHours(tH, tM, 0, 0)
      if (countdownEl.dataset.isTomorrow === 'true')
        target.setDate(target.getDate() + 1)
      const diffMs = target - now
      if (diffMs <= 0 && diffMs > -2000) {
        this.updatePrayerUI()
        return
      }
      if (diffMs > 0) {
        const h = Math.floor(diffMs / 3600000)
        const m = Math.floor((diffMs % 3600000) / 60000)
        const s = Math.floor((diffMs % 60000) / 1000)
        const pad = (num) => num.toString().padStart(2, '0')
        countdownEl.innerText = `-${pad(h)}:${pad(m)}:${pad(s)}`
      }
    }, 1000)
  },
  stopClock() {
    if (State.intervals.clock) clearInterval(State.intervals.clock)
  },
  requestGeolocation() {
    if (navigator.geolocation) {
      Utils.showToast('Mendeteksi GPS...', 'info')
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          State.data.location = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            name: 'Memproses...',
          }
          State.data.isGPSActive = true
          await State.fetchRealtimePrayerTimes(true)
          Utils.showToast('Lokasi disinkronisasi!')
          if (document.getElementById('prayer-container')) this.navigate('home')
        },
        (err) => {
          Utils.showToast('Gagal akses GPS.', 'error')
          State.data.isGPSActive = false
        },
        { enableHighAccuracy: true },
      )
    }
  },
  setLastRead(surahId, ayahNumber, surahName) {
    State.data.lastRead = {
      surahId,
      ayahNumber,
      surahName,
      timestamp: Date.now(),
    }
    State.save()
    Utils.showToast('Disimpan ke Terakhir Dibaca')
    this.navigate('surahDetail', surahId, ayahNumber)
  },
  playAyah(url, title, playlistStr, index) {
    audioManager.play(
      url,
      title,
      JSON.parse(decodeURIComponent(playlistStr)),
      index,
    )
  },

  // --- BACKUP & RESTORE JSON ---
  exportDataJSON() {
    try {
      const dataStr = JSON.stringify(State.data, null, 2)
      const blob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `MyQuran_Backup_${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      Utils.showToast('Data berhasil diunduh!', 'success')
    } catch (e) {
      Utils.showToast('Gagal mengekspor data', 'error')
    }
  },
  importDataJSON(event) {
    const file = event.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const parsedData = JSON.parse(e.target.result)
        if (parsedData && parsedData.theme !== undefined) {
          State.data = { ...State.data, ...parsedData }
          State.save()
          State.applyTheme()
          Utils.showToast('Data berhasil dipulihkan!', 'success')
          setTimeout(() => location.reload(), 1500)
        } else throw new Error('Format tidak valid')
      } catch (err) {
        Utils.showToast('File rusak atau tidak valid.', 'error')
      }
    }
    reader.readAsText(file)
    event.target.value = ''
  },

  // --- QR SYNC FUNCTIONS ---
  showGenerateQRModal() {
    const overlay = document.getElementById('modal-overlay')
    const content = document.getElementById('modal-content')
    const syncData = {
      lr: State.data.lastRead,
      qs: State.data.quiz.score || 0,
      bm: State.data.bookmarks || [],
    }
    const jsonStr = JSON.stringify(syncData)
    if (jsonStr.length > 2500) {
      Utils.showToast('Data terlalu besar, gunakan JSON.', 'error')
      return
    }

    content.innerHTML = `
                    <div class="flex justify-between items-start mb-4 sm:mb-6">
                        <div><h3 class="font-display font-bold text-lg sm:text-2xl">QR Sinkronisasi</h3><p class="text-[10px] sm:text-xs text-gray-500 mt-1">Pindai dari perangkat baru.</p></div>
                        <button onclick="overlay.classList.add('hidden')" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 dark:bg-white/10 rounded-full hover:text-red-500"><i class="ph-bold ph-x text-xs sm:text-sm"></i></button>
                    </div>
                    <div class="flex justify-center bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 mx-auto w-fit">
                        <div id="qrcode-container"></div>
                    </div>
                    <p class="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400">Peringatan: Jaga kerahasiaan QR ini.</p>
                `
    overlay.classList.remove('hidden')
    overlay.style.display = 'flex'
    setTimeout(() => {
      overlay.classList.remove('opacity-0')
      content.classList.remove('scale-95')
    }, 10)
    setTimeout(() => {
      document.getElementById('qrcode-container').innerHTML = ''
      new QRCode(document.getElementById('qrcode-container'), {
        text: jsonStr,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.L,
      })
    }, 300)
  },

  showScannerModal() {
    const overlay = document.getElementById('modal-overlay')
    const content = document.getElementById('modal-content')
    content.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <div><h3 class="font-display font-bold text-lg sm:text-xl">Kamera QR</h3></div>
                        <button onclick="app.closeScannerModal()" class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-gray-100 dark:bg-white/10 rounded-full hover:text-red-500"><i class="ph-bold ph-x text-xs sm:text-sm"></i></button>
                    </div>
                    <div class="w-full bg-black rounded-xl sm:rounded-2xl overflow-hidden min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center relative aspect-square max-w-sm mx-auto shadow-inner border border-white/10" id="reader-container">
                        <div id="reader" style="width: 100%; height: 100%;"></div>
                    </div>
                    <p class="text-[10px] sm:text-xs text-center text-gray-500 mt-4">Arahkan kamera ke QR di perangkat lama.</p>
                `
    overlay.classList.remove('hidden')
    overlay.style.display = 'flex'
    setTimeout(() => {
      overlay.classList.remove('opacity-0')
      content.classList.remove('scale-95')
    }, 10)
    setTimeout(() => {
      this.html5QrcodeScanner = new Html5QrcodeScanner(
        'reader',
        { fps: 10, qrbox: { width: 200, height: 200 }, aspectRatio: 1.0 },
        false,
      )
      this.html5QrcodeScanner.render(
        (decodedText, result) => {
          this.processQRData(decodedText)
        },
        (err) => {},
      )
    }, 400)
  },
  closeScannerModal() {
    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.clear().catch((e) => console.error(e))
      this.html5QrcodeScanner = null
    }
    document.getElementById('modal-overlay').classList.add('hidden')
  },
  processQRData(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr)
      if (parsed && (parsed.lr !== undefined || parsed.qs !== undefined)) {
        this.closeScannerModal()
        if (parsed.lr) State.data.lastRead = parsed.lr
        if (parsed.qs !== undefined) State.data.quiz.score = parsed.qs
        if (parsed.bm) State.data.bookmarks = parsed.bm
        State.save()
        Utils.showToast('Sinkronisasi berhasil!', 'success')
        setTimeout(() => location.reload(), 1500)
      } else throw new Error('Invalid Format')
    } catch (e) {
      Utils.showToast('QR Code tidak dikenali.', 'error')
      this.closeScannerModal()
    }
  },
  confirmReset() {
    const overlay = document.getElementById('modal-overlay')
    const content = document.getElementById('modal-content')
    content.innerHTML = `
                    <div class="text-center p-2 sm:p-4">
                        <div class="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><i class="ph-bold ph-warning text-2xl sm:text-3xl"></i></div>
                        <h3 class="font-display font-bold text-xl sm:text-2xl mb-2">Hapus Data?</h3>
                        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">Semua riwayat bacaan dan skor akan dihapus permanen.</p>
                        <div class="flex gap-2 sm:gap-3">
                            <button onclick="document.getElementById('modal-overlay').classList.add('hidden')" class="flex-1 py-3 sm:py-3.5 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-bold rounded-lg sm:rounded-xl text-xs sm:text-sm">Batal</button>
                            <button onclick="localStorage.clear(); location.reload();" class="flex-1 py-3 sm:py-3.5 bg-red-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg shadow-red-500/30 text-xs sm:text-sm">Ya, Hapus</button>
                        </div>
                    </div>
                `
    overlay.classList.remove('hidden')
    overlay.style.display = 'flex'
    setTimeout(() => {
      overlay.classList.remove('opacity-0')
      content.classList.remove('scale-95')
    }, 10)
  },
}

window.addEventListener('DOMContentLoaded', () => app.init())
