-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2021 at 09:04 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belhasav7`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `status`) VALUES
(32, 'LMV', 1);

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `id` int(10) NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`id`, `code`, `name`, `status`) VALUES
(1, 'en-en', 'English', 1),
(2, 'ta-ta', 'Tamil', 1),
(3, 'ar-ar', 'Arabic', 1),
(4, 'ur-ur', 'Urdu', 1),
(5, 'hi-hi', 'Hindi', 1),
(6, 'be-be', 'Bengali', 1),
(7, 'ma-ma', 'Malayalam', 1),
(8, 'fa-fa', 'Farsi', 1),
(9, 'ch-ch', 'Chinese', 1),
(10, 'ru-ru', 'Russian', 1);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) NOT NULL,
  `answer` text NOT NULL,
  `category` varchar(100) NOT NULL,
  `photo` text NOT NULL,
  `choice1photo` text NOT NULL,
  `choice2photo` text NOT NULL,
  `choice3photo` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `topicArea` varchar(100) NOT NULL,
  `parent` varchar(15) NOT NULL,
  `isRealtime` tinyint(1) NOT NULL DEFAULT 0,
  `isPractise` tinyint(1) NOT NULL DEFAULT 0,
  `isCommon` tinyint(1) NOT NULL DEFAULT 0,
  `isSpecific` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `answer`, `category`, `photo`, `choice1photo`, `choice2photo`, `choice3photo`, `created`, `topicArea`, `parent`, `isRealtime`, `isPractise`, `isCommon`, `isSpecific`, `status`) VALUES
(442, '2', '32', 'http://localhost:8080/belhasa/public/images/question-photos/NRU001.png', '', '', '', '2020-11-23 07:49:49', '10', 'specific', 1, 1, 0, 1, 1),
(443, '1', '32', 'http://localhost:8080/belhasa/public/images/question-photos/NTS001.png', '', '', '', '2020-11-23 07:49:50', '11', 'specific', 1, 1, 0, 1, 1),
(444, '1', '32', '', 'http://localhost:8080/belhasa/public/images/question-photos/TS10A.png', 'http://localhost:8080/belhasa/public/images/question-photos/TS10B.png', 'http://localhost:8080/belhasa/public/images/question-photos/TS10C.png', '2020-11-23 07:49:51', '11', 'specific', 1, 1, 0, 1, 1),
(445, '2', '32', '', '', '', '', '2020-11-23 07:49:52', '13', 'specific', 1, 1, 0, 1, 1),
(446, '2', '32', '', '', '', '', '2020-11-23 07:49:52', '13', 'specific', 1, 1, 0, 1, 1),
(447, '1', '32', '', '', '', '', '2020-11-23 07:49:52', '13', 'specific', 1, 1, 0, 1, 1),
(448, '1', '32', '', '', '', '', '2020-11-23 07:49:53', '14', 'specific', 1, 1, 0, 1, 1),
(449, '3', '32', '', '', '', '', '2020-11-23 07:49:53', '14', 'specific', 1, 1, 0, 1, 1),
(450, '3', '32', '', '', '', '', '2020-11-23 07:49:53', '14', 'specific', 1, 1, 0, 1, 1),
(451, '2', '32', '', '', '', '', '2020-11-23 07:49:54', '14', 'specific', 1, 1, 0, 1, 1),
(452, '1', '32', '', '', '', '', '2020-11-23 07:49:54', '14', 'specific', 1, 1, 0, 1, 1),
(453, '1', '32', '', '', '', '', '2020-11-23 07:49:54', '15', 'specific', 1, 1, 0, 1, 1),
(454, '3', '32', '', '', '', '', '2020-11-23 07:49:55', '15', 'specific', 0, 1, 1, 1, 1),
(455, '2', '32', '', '', '', '', '2020-11-23 07:49:55', '16', 'specific', 0, 1, 1, 1, 1),
(456, '1', '32', '', '', '', '', '2020-11-23 07:49:56', '16', 'specific', 0, 1, 1, 1, 1),
(457, '1', '32', 'http://localhost:8080/belhasa/public/images/question-photos/TL101S.png', '', '', '', '2020-11-23 07:49:56', '12', 'specific', 0, 1, 1, 1, 1),
(458, '3', '32', '', '', '', '', '2020-11-23 07:49:57', '59', 'specific', 0, 1, 1, 1, 1),
(459, '3', '32', '', '', '', '', '2020-11-23 07:49:58', '59', 'specific', 0, 1, 1, 1, 1),
(460, '2', '32', '', '', '', '', '2020-11-23 07:49:58', '59', 'specific', 0, 1, 1, 1, 1),
(461, '1', '32', '', '', '', '', '2020-11-23 07:49:59', '59', 'specific', 0, 1, 1, 1, 1),
(462, '1', '32', '', '', '', '', '2020-11-23 07:49:59', '59', 'specific', 0, 1, 1, 1, 1),
(463, '3', '32', '', '', '', '', '2020-11-23 07:49:59', '59', 'specific', 0, 1, 1, 1, 1),
(464, '2', '32', 'http://localhost:8080/belhasa/public/images/question-photos/LMV007.pn\r\ng', '', '', '', '2020-11-23 07:49:59', '59', 'specific', 0, 1, 1, 1, 1),
(465, '1', '32', '', '', '', '', '2020-11-23 07:50:00', '59', 'specific', 0, 1, 1, 1, 1),
(466, '2', '32', '', '', '', '', '2020-11-23 07:50:00', '59', 'specific', 0, 1, 1, 1, 1),
(467, '2', '32', '', '', '', '', '2020-11-23 07:50:00', '59', 'specific', 0, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `questionstate`
--

CREATE TABLE `questionstate` (
  `id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `question_id` int(20) NOT NULL,
  `category` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `questions_translations`
--

CREATE TABLE `questions_translations` (
  `id` int(10) NOT NULL,
  `questionid` int(10) NOT NULL,
  `language` varchar(50) NOT NULL,
  `question` text CHARACTER SET utf8 NOT NULL,
  `choice1` text CHARACTER SET utf8 NOT NULL,
  `choice2` text CHARACTER SET utf8 NOT NULL,
  `choice3` text CHARACTER SET utf8 NOT NULL,
  `audio` text CHARACTER SET utf8 NOT NULL,
  `option1audio` text CHARACTER SET utf8 NOT NULL,
  `option2audio` text CHARACTER SET utf8 NOT NULL,
  `option3audio` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions_translations`
--

INSERT INTO `questions_translations` (`id`, `questionid`, `language`, `question`, `choice1`, `choice2`, `choice3`, `audio`, `option1audio`, `option2audio`, `option3audio`) VALUES
(3076, 442, '1', 'The picture shows Red\r\ntarffic light, this means', 'Be ready to stop.', 'You must stop.', 'You must slow down.', 'http://localhost:8080/belhasa/public/audio/Recording.m4a', 'http://localhost:8080/belhasa/public/audio/Recording.m4a', 'http://localhost:8080/belhasa/public/audio/Recording.m4a', 'http://localhost:8080/belhasa/public/audio/Recording.m4a'),
(3077, 442, '3', 'تبين الصورة ادناه  أشارة ضوئيه حمراء هذا يعني', 'استعد للتوقف', 'يجب عليك التوقف', 'يجب عليك تخفيف السرعه', 'http://localhost:8080/belhasa/public/audio/RU001-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-C-ARA.mp3'),
(3078, 442, '4', 'اس تصویر میں ٹریفک کی سرخ بتی دکھائی گئی ہے جس کا مطلب ہے کہ', 'رکنے کےلئے تیار رہیں۔', 'آپ پر لازم ہے کہ رک جائيں', 'آپ کےلئے ضروری ہے کہ رفتار کم کردیں۔', 'http://localhost:8080/belhasa/public/audio/RU001-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-C-URD.mp3'),
(3079, 442, '6', 'ছবিটিতে লাল ট্রাফিক আলো দেখা যাইতাসে, এই অর্থ', 'থামাতে প্রস্তুত থাকেন', 'আপনাকে থামাইতেই হইব।', 'আপনার গতি মন্থর করতে হইব', 'http://localhost:8080/belhasa/public/audio/RU001-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-C-BEN.mp3'),
(3080, 442, '9', '该图中显示为红灯，这表示', '准备停车', '你必须停车', '你必须减速', 'http://localhost:8080/belhasa/public/audio/RU001-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-C-CHS.mp3'),
(3081, 442, '10', 'На картинке показан\r\nкрасный сигнал\r\nсветофора, он означает:', 'приготовьтесь\r\nостановиться.', 'вы должны\r\nостановиться.', 'вы должны сбавить\r\nскорость.', 'http://localhost:8080/belhasa/public/audio/RU001-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RU001-C-RUS.mp3'),
(3082, 442, '5', 'चित्र में लाल ट्रैफिक लाइट दखाई गई है, इसका मतलब है कि', 'रुकने के लिये तैयार रहे', 'आपको रुकना चाहिये।', 'आपको गति कम करनी चाहिये।', '', '', '', ''),
(3083, 443, '1', 'What does this sign\r\nmean?', 'Prohibits exceeding\r\nthe 80 kph speed\r\nlimit', 'Mandatory, up to 80\r\nkph only', 'Warning, do not\r\nexceed 80 pkh', 'http://localhost:8080/belhasa/public/audio/Recording (2).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (2).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (2).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (2).m4a'),
(3084, 443, '3', 'احدى صعوبات القيادة هي', 'أن تدع السائقين الاخرين يعرفون انهم يقودون بشكل خطير', 'توقع ماسيفعله السائقون الاخرون', 'فحص زيت السيارة بأنتظام', 'http://localhost:8080/belhasa/public/audio/TS001-STEM-ARA/mp3', 'http://localhost:8080/belhasa/public/audio/TS001-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-C-ARA.mp3'),
(3085, 443, '4', 'اس اشارے کا کیا مطلب ہے؟', '80کلومیٹرفی گھنٹہ حد رفتار سے تجاوز کرنے کی ممانعت ہے۔', 'لازمی ہے کہ صرف 80 کلومیٹرفی گھنٹہ رفتار رہے۔', 'خبردار رہیں، 80کلومیٹر فی گھنٹہ کی رفتار سے تجاوز نہ کریں۔', 'http://localhost:8080/belhasa/public/audio/TS001-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-C-URD.mp3'),
(3086, 443, '6', 'এই চিন্হটির অর্থ কি?', '৮০ কিমি/ ঘ. গতিসীমা ছাড়ানোর নিষেধাজ্ঞা', 'নির্দেশাধীন,শুধুমাত্র ৮০ কিমি/ ঘ. পর্যন্ত', 'সাবধান, ৮০ কিমি/ ঘ. গতিসীমা ছাড়াইবেন না', 'http://localhost:8080/belhasa/public/audio/TS001-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-C-BEN.mp3'),
(3087, 443, '9', '这个标志表示', '禁止超过每小时80公里的限速', '强制最高限速每小时80公里', '警告，不得超过每小时80公里', 'http://localhost:8080/belhasa/public/audio/TS001-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-C-CHS.mp3'),
(3088, 443, '10', 'Что означает этот знак?', 'Запрещается\r\nпревышать\r\nограничение\r\nскорости до 80\r\nкм/ч', 'Предписывается:\r\nехать со скоростью\r\nдо 80 км/ч', 'Предупреждение: не\r\nпревышайте скорости\r\n80 км/ч', 'http://localhost:8080/belhasa/public/audio/TS001-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TS001-C-RUS.mp3'),
(3089, 443, '5', 'इस संकेत का क्या अर्थ है ?', '80 कमी प्रति घंटा की गति सीमा से ऊपर जाना मना है।', '80 कमी प्रति घंटा की गति सीमा बनाए रखना जरुरी है', 'चेतावनी 80 कमी प्रति घंटा की गति सीमा से ऊपर न जाएँ।', '', '', '', ''),
(3090, 444, '1', 'This sign means end of\r\ndual carriageway.', '', '', '', 'http://localhost:8080/belhasa/public/audio/Recording (3).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (3).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (3).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (3).m4a'),
(3091, 444, '3', 'ماهي العلامة التي تعني نهاية طريق مزدوج أمامك', '', '', '', 'http://localhost:8080/belhasa/public/audio/TS010-STEM-ARA.mp3', '', '', ''),
(3092, 444, '4', 'ان میں سے کون سا اشارہ آگے ڈبل کیریج وے ختم ہوتا ہے', '', '', '', 'http://localhost:8080/belhasa/public/audio/TS010-STEM-URD.mp3', '', '', ''),
(3093, 444, '6', 'এই সাইন মানে শেষ\r\nদ্বৈত চলাচল.', '', '', '', 'http://localhost:8080/belhasa/public/audio/TS010-STEM-BEN.mp3', '', '', ''),
(3094, 444, '9', '这个标志表示结束双车道', '', '', '', 'http://localhost:8080/belhasa/public/audio/TS010-STEM-CHS.mp3', '', '', ''),
(3095, 444, '10', 'Этот знак отмечает\r\nконец проезжей части с\r\nдвухсторонним\r\nдвижением.', '', '', '', 'http://localhost:8080/belhasa/public/audio/TS010-STEM-RUS.mp3', '', '', ''),
(3096, 444, '5', 'वह संकेत चुनें जीसका अर्थ है कि आगे दो तरफा रास्ता बंद है।', '', '', '', '', '', '', ''),
(3097, 445, '1', 'If visibility is reduced by fog,', 'You must switch on your hazard lights', 'Be patient and avoid\r\npassing or crossing\r\ntraffic.', 'Maintain your speed', 'http://localhost:8080/belhasa/public/audio/Recording (4).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (4).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (4).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (4).m4a'),
(3098, 445, '3', 'اذا ضعفت الرؤيا بسبب الضباب', 'ينبغي عليك تشيغل أضواء التحذير (الخطر)', 'تحلى بالصبر وتجنب تجاوز او قطع الطريق على المرور القادم', 'حافظ على سرعتك', 'http://localhost:8080/belhasa/public/audio/FOG001-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-C-ARA.mp3'),
(3099, 445, '4', 'اگر دھند کی وجہ سے سڑک پر دکھائی دینا کم ہوجائے تو', 'آپ کو چاہیئے کہ اپنی گاڑی کی ہنگامی بتیاں روشن کردیں', 'صبر کا مظاہرہ کریں اور ٹریفک کو اوورٹیک کرنے سے اجتناب کریں', 'اپنی رفتار برقرار رکھیں۔', 'http://localhost:8080/belhasa/public/audio/FOG001-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-C-URD.mp3'),
(3100, 445, '6', 'যদে কুয়াশার জন্য দৃশ্যমানতা কইমা যায়, তা হইলে', 'অবশ্যই আপনার বিপদ সংকেত লাইটটি জ্বালাইবেন', 'ধৈর্য ধরেন এবং পাশ কাটাইয়া যাওয়া বা পারাপার করতে থাকা ট্রাফিক এড়াইয়া চলেন।', 'নিজস্ব গতি বজায় রাখেন', 'http://localhost:8080/belhasa/public/audio/FOG001-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-C-BEN.mp3'),
(3101, 445, '9', '如果大雾下可见度降低', '你必须开启危险警告灯', '要有耐性，并避免超过或穿过交通流', '保持你的车速', 'http://localhost:8080/belhasa/public/audio/FOG001-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-C-CHS.mp3'),
(3102, 445, '10', 'Если туман\r\nограничивает видимость,', 'Вам нужно\r\nвключить\r\nаварийные огни.', 'Будьте терпеливы и\r\nстарайтесь избегать\r\nтранспортных\r\nпотоков.', 'Придерживайтесь той\r\nже скорости.', 'http://localhost:8080/belhasa/public/audio/FOG001-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG001-C-RUS.mp3'),
(3103, 445, '5', 'अगर कोहरे के कारण कम दखाई दे रहा है तो', 'आपको अपनी हैजार्ड लाइट जला लेनी चाहिये।', 'धैर्य रखें और यातायात आगे जाने या उसका रास्ता काटने से बचें।', 'अपनी गति बनाए रखें।', '', '', '', ''),
(3104, 446, '1', 'Foggy conditions can be patchy, this means', 'fog is clearing in some areas but foggy again in some areas', 'Fog is consistently\r\ndense in some areas.', 'fog has cleared, it is time to speed up.', 'http://localhost:8080/belhasa/public/audio/Recording (5).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (5).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (5).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (5).m4a'),
(3105, 446, '3', 'يمكن أن يكون الضباب أثناء القيادة متقطعا هذا يعني', 'أن الضباب ينجلي في بعض الاماكن ولاكنه يعود في اماكن اخرى', 'يكون الضباب كثيفا باستمرار في بعض المناطق', 'انجلى الضباب وحان الوقت لزيادة السرعه', 'http://localhost:8080/belhasa/public/audio/FOG002-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-C-ARA.mp3'),
(3106, 446, '4', 'دھند ٹکڑوں کی صورت میں ہوسکتی ہے اس کا مطلب ہے کہ', 'بعض جگہوں پر دھند صاف ہوجاتی ہے لیکن دوبارہ آگے موجود ہوتی ہے۔', 'دھند مستقل طور پر کچھ جگہوں میں گہری ہوتی ہے۔', 'دھند صاف ہوچکی ہے اور اب رفتار بڑھانے کا وقت ہے۔', 'http://localhost:8080/belhasa/public/audio/FOG002-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-C-URD.mp3'),
(3107, 446, '6', 'কুয়াশাচ্ছন্ন অবস্থার বিভিন্নতা থাকতে পারে, এর অর্থ', 'কিছু জায়গায় কুয়াশা পরিষ্কার হইয়া গেসে কিন্তু কিছু জায়গায় রইসে', 'কুয়াশা কিছু জায়গায় একইরকম ঘন', 'কুয়াশা পরিষ্কার হইয়া গেসে, এইবার গতি বাড়ান।', 'http://localhost:8080/belhasa/public/audio/FOG002-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-C-BEN.mp3'),
(3108, 446, '9', '雾气有的时候可能会分布不均匀，意思是', '雾气在一些区域已经清除，但在其他区域会再次出现', '雾气一贯在部分地区密集', '雾已消散，加速行驶', 'http://localhost:8080/belhasa/public/audio/FOG002-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-C-CHS.mp3'),
(3109, 446, '10', 'Условия тумана могут\r\nбыть неоднородными,\r\nэто значит,', 'что туман\r\nместами\r\nотступает, а\r\nместами снова\r\nвозвращается', 'что в некоторых\r\nместах плотность\r\nтумана одинаковая.', 'что туман отступил и\r\nпора увеличить\r\nскорость.', 'http://localhost:8080/belhasa/public/audio/FOG002-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG002-C-RUS.mp3'),
(3110, 446, '5', 'कोहरे की स्थिति खराब हो सकती है, इसका अर्थ है', 'कोहरा कुछ स्थानों पर साफ हो गया है लेकिन फिर कुछ स्थानों पर कोहरा है।', 'कुछ क्षेत्रों में कोहरा लगातार घना हो रहा है।', 'कोहरा साफ हो गया है यह गति बढ़ाने का समय है।', '', '', '', ''),
(3111, 447, '1', 'Increase your following distance. You need it for safety.', 'Most required, most of the time.', 'Required only during\r\nfoggy conditions.', 'Most required to escape from the fog as quickly as possible.', 'http://localhost:8080/belhasa/public/audio/Recording (6).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (6).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (6).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (6).m4a'),
(3112, 447, '3', 'لدواعي السلامة تحتاج لزيادة مسافة اللإتباع', 'إجراء مطلوب أكثر في اغلب اللأوقات', 'إجراء مطلوب فقط أثناء تواجد الضباب', 'إجراء مطلوب أكثر للخروج من ظرف القيادة في الضباب في أسرع وقت', 'http://localhost:8080/belhasa/public/audio/FOG003-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-C-ARA.mp3'),
(3113, 447, '4', 'اگلی گاڑی سے وقفہ بڑھا لیں۔ محفوظ رہنے کےلئے آپ کو ایسا کرنے کی ضرورت ہے۔', 'ایسا کرنے کی ہروقت اور ہرجگہ ضرورت ہے', 'صرف دھند ہونے کی صورت میں ایسا کرنے کی ضرورت ہے۔', 'جتنا جلدی ممکن ہوسکے دھند والی جگہ سے نکلنے کےلئے ایسا کرنے کی ضرورت ہے۔', 'http://localhost:8080/belhasa/public/audio/FOG003-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-C-URD.mp3'),
(3114, 447, '6', 'আপনার অনুসরনের দূরত্ব বাড়ান। এটি আপনার নিরাপত্তার জন্য প্রয়োজন।', 'বেশীর ভাগ সময় সবচেয়ে বেশী প্রয়োজন।', 'শুধুমাত্র কুয়াশাচ্ছন্ন অবস্থায় প্রয়োজন।', 'যত শীঘ্র সম্ভব কুয়াশা থিকা বইরানোর জন্য প্রয়োজন।', 'http://localhost:8080/belhasa/public/audio/FOG003-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-C-BEN.mp3'),
(3115, 447, '9', '为了保证安全，你需要在哪些情况下增大行车距离', '大部分时间都需要', '只在雾天需要', '在尽快逃离雾天的时候最需要', 'http://localhost:8080/belhasa/public/audio/FOG003-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-C-CHS.mp3'),
(3116, 447, '10', 'Увеличьте дистанцию\r\nследования. Это\r\nнеобходимо для вашей\r\nбезопасности.', 'Особенно\r\nнеобходимо, в\r\nбольшую часть\r\nвремени.', 'Необходимо лишь в\r\nусловиях тумана.', 'Особенно необходимо,\r\nчтобы выбраться из\r\nтумана как можно\r\nскорее.', 'http://localhost:8080/belhasa/public/audio/FOG003-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FOG003-C-RUS.mp3'),
(3117, 447, '5', 'आगे वाली गाड़ी से दूरी बढ़ानी चाहिये। यह आपकी सुरक्षा के लिये कब आवश्यक है?', 'अधितकर समय सबसे आवश्यक है।', 'केवल कोहरे की स्थिति में आवश्यक है।', 'कोहरे से जल्दी से जल्दी दूर हो जाने के लिये सबसे आवश्यक है।', '', '', '', ''),
(3118, 448, '1', 'Driving through flooded area require drivers to be extra cautious because', 'It is difficult to guess how deep the water is.', 'It is difficult to remove moisture from the brake system', 'It is not easy to speed up in deep water.', 'http://localhost:8080/belhasa/public/audio/Recording (7).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (7).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (7).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (7).m4a'),
(3119, 448, '3', 'تتطلب القيادة في اماكن مغمورة بالمياه مزيدا من الحذر من السائق', '', 'استعد للتوقف', 'يجب عليك التوقف', 'http://localhost:8080/belhasa/public/audio/FLD011-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-C-ARA.mp3'),
(3120, 448, '4', 'پانی والی جگہوں پر گاڑی چلاتے وقت ڈرائیوروں کو زیادہ احتیاط کرنے کی ضرورت ہوتی ہے کیونکہ', 'پانی کی گہرائی کا اندازہ لگانا مشکل ہوتا ہے۔', 'بریک کے نظام سے نمی خشک کرنے میں بہت مشکل پیش آتی ہے۔', 'گہرے پانی میں رفتار بڑھانا آسان نہیں ہوتا۔', 'http://localhost:8080/belhasa/public/audio/FLD011-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-C-URD.mp3'),
(3121, 448, '6', 'বন্যা কবলিত এলাকায় চালকদের অতিরিক্ত সতর্ক থাকতে হয়, কারন', 'এখানে অনুমান করা কঠিন হয় যে জলের গভীরতা কতটা।', 'ব্রেকের থিকা আর্দ্রভাব মুইছা ফেলা কঠিন', 'গভীর জলে গতি বাড়ানো সহজসাধ্য ব্যপার না।', 'http://localhost:8080/belhasa/public/audio/FLD011-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-C-BEN.mp3'),
(3122, 448, '9', '驾驶员在通过被洪水淹没的区y域要格外小心，因为', '很难判断水有多深', '很难从刹车系统排水', '在深水中很难加速', 'http://localhost:8080/belhasa/public/audio/FLD011-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-C-CHS.mp3'),
(3123, 448, '10', 'Вождение по\r\nзатопленной местности\r\nтребует от водителя\r\nповышенной\r\nосторожности, поскольку', 'трудно\r\nпредугадать\r\nглубину воды.', 'с тормозной системы\r\nсложно удалять влагу', 'в глубокой воде\r\nсложно разгоняться.', 'http://localhost:8080/belhasa/public/audio/FLD011-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD011-C-RUS.mp3'),
(3124, 448, '5', 'पानी भरे हुए क्षेत्रों में वाहन चलाते समय चालक को अतिरत्क सावधानी की आवश्यकता है क्योंकि', 'इस बात का अनुमान लगाना कठिन है कि पानी कितना गहरा है।', 'ब्रेक सिस्टम से नमी हटाना कठिन है', 'गहरे पानी में गति बढ़ाना संभव नहीं है।', '', '', '', ''),
(3125, 449, '1', 'If you must drive through flood, it is best to', 'Engage the assistance of other drivers.', 'Engage low gear, low speed while maintaining low engine rev.', 'Engage low gear, low speed, rev the engine while slipping the clutch.', 'http://localhost:8080/belhasa/public/audio/Recording (8).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (8).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (8).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (8).m4a'),
(3126, 449, '3', 'أذا كنت مظطرا للقيادة في طريق مغمور بالمياه فأنه من الأفضل', 'طلب مساعده السائقين الأخرين', 'أختر ناقل السرعه الأدنى وقد بسرعه  بطيئه وقم بتخفيف تسارع المحرك', 'أختر ناقل السرعه الأدنى وقد بسرعه بطيئه وحافظ على تسارع سلس مع ضبط دوران المحرك', 'http://localhost:8080/belhasa/public/audio/FLD012-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-C-ARA.mp3'),
(3127, 449, '4', 'اگر آپ کو پانی میں سے گذرنا ضروری ہوتو بہتر یہ ہے کہ', 'دوسرے ڈرائیوروں کی مدد حاصل کریں', 'چھوٹا گئیر لگائیں، رفتار کم رکھیں اور انجن کی رفتار بھی کم رکھیں', 'چھوٹا گئیر لگائیں، رفتار کم رکھیں اور آدھا کلچ استعمال کرتے ہوئے انجن کی رفتار زیادہ رکھیں۔', 'http://localhost:8080/belhasa/public/audio/FLD012-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-C-URD.mp3'),
(3128, 449, '6', 'যদি আপনারে বন্যা কবলিত এলাকায় চালাইতেই হয়, তবে সবচেয়ে ভাল', 'অন্যান্য চালকদের সহযোগীতার জন্য নিযুক্ত করেন।', '', '', 'http://localhost:8080/belhasa/public/audio/FLD012-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-C-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-A-BEN.mp3'),
(3129, 449, '9', '如果你必须驾车通过洪水，最好是', '请其他的司机帮助', '保持抵挡低速，并保持发动机较低转速', '抵挡低速，离合器打滑的时候，发动机加速', 'http://localhost:8080/belhasa/public/audio/FLD012-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-C-CHS.mp3'),
(3130, 449, '10', 'Если вам необходимо\r\nехать через\r\nзатопленный участок,\r\nлучше всего', 'Обратиться за\r\nпомощью к\r\nдругим\r\nводителям.', 'Использовать\r\nнизкоскоростную\r\nпередачу, низкую\r\nскорость и держать\r\nдвигатель на низком\r\nчисле оборотов.', 'Использовать\r\nнизкоскоростную\r\nпередачу, низкую\r\nскорость, увеличивать\r\nчисло оборотов\r\nдвигателя и буксовать\r\nсцепление.', 'http://localhost:8080/belhasa/public/audio/FLD012-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD012-C-RUS.mp3'),
(3131, 449, '5', 'पानी भरे हुए क्षेत्रों में वाहन चलाते समय चालक को अतिरत्क सावधानी की आवश्यकता है क्योंकि', 'इस बात का अनुमान लगाना कठिन है कि पानी कितना गहरा है।', 'ब्रेक सिस्टम से नमी हटाना कठिन है', 'गहरे पानी में गति बढ़ाना संभव नहीं है।', '', '', '', ''),
(3132, 450, '1', 'When driving through flood, it is important to be both', 'Fast and safe.', 'Safe and Aggressive.', 'Cautious & Courteous.', 'http://localhost:8080/belhasa/public/audio/Recording (9).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (9).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (9).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (9).m4a'),
(3133, 450, '3', 'أثناء القيادة في طرق مغمورة بالمياة فأنه من الأهميه أن تكون', 'سريعا وآمنا', 'آمنا وعدوانيا', 'حذرآ وكيسا', 'http://localhost:8080/belhasa/public/audio/FLD013-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-C-ARA.mp3'),
(3134, 450, '4', 'جب پانی میں سے گاڑی گذار رہے ہوں تو یہ دونوں کام اہم ہیں۔', 'جلدی اور سلامتی', 'سلامتی اور جارحانہ انداز', 'محتاط اور با اخلاق', 'http://localhost:8080/belhasa/public/audio/FLD013-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-C-URD.mp3'),
(3135, 450, '6', 'বন্যার মধ্য দিয়া চালনা করলে, আপনার হওয়া প্রয়োজন', 'দ্রুত এবং নিরাপদ।', 'নিরাপদ এবং আক্রমনাত্মক।', 'সতর্ক এবং শিষ্ট।', 'http://localhost:8080/belhasa/public/audio/FLD013-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-C-BEN.mp3'),
(3136, 450, '9', '当驾车通过洪水时，重要的是同时具有', '快速和安全', '安全和侵略性', '谨慎和礼貌', 'http://localhost:8080/belhasa/public/audio/FLD013-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-C-CHS.mp3'),
(3137, 450, '10', 'При езде через\r\nзатопленную местность\r\nодинаково важно быть', 'быстрым и\r\nосторожным.', 'осторожным и\r\nагрессивным.', 'осторожным и\r\nучтивым.', 'http://localhost:8080/belhasa/public/audio/FLD013-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD013-C-RUS.mp3'),
(3138, 450, '5', 'भरे हुए पानी मे वाहन चलाते समय ये दो बात महत्वपूर्ण हैं', 'तेजी और सुरक्षा', 'सुरक्षा और आक्रामकता', 'सावधानी और विनम्रता', '', '', '', ''),
(3139, 451, '1', 'Once you successfully pass the flooded area, it is important to', 'Maintain low speed and look for safe place to park.', 'Restore brake efficiency.', 'Find a mechanic to check the condition of your brakes system.', 'http://localhost:8080/belhasa/public/audio/Recording (10).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (10).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (10).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (10).m4a'),
(3140, 451, '3', 'بمجرد مرورك بنجاح من المنطقه المغمورة بالمياه فمن الأهميه أن', 'تخفيف السرعه والبحث عن مكان آمن للوقوف', 'أستعادة كفاءة الفرامل', 'البحث عن ميكانيكي لفحص حاله الفرامل لمركبتك', 'http://localhost:8080/belhasa/public/audio/FLD014-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-C-ARA.mp3'),
(3141, 451, '4', 'جب آپ پانی میں سے کامیابی سے گذرجائیں تو ضروری ہے کہ', 'رفتار کم رکھیں اور رکنے کےلئے محفوظ مقام تلاش کریں۔', 'بریک کی کارکردگی کو دوبارہ بہتر کریں', 'اپنی گاڑی کی بریک کے نظام کی حالت کامعائنہ کرنے کےلئے کوئی مکینک تلاش کریں۔', 'http://localhost:8080/belhasa/public/audio/FLD014-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-C-URD.mp3'),
(3142, 451, '6', 'যখন আপনি নিরাপদে বন্যা কবলিত এলাকাটি পার কইরা যাইবেন, তখন গুরুত্বপূর্ণ হইল', 'নিম্ন গতি বজায় রাখা এবং নিরাপদ পার্কিং-এর স্থানের খোঁজ করা।', 'ব্রেকের ক্ষমতা পুর্বাবস্থায় ফিরাইলা আনা।', 'ব্রেক ব্যবস্থা পরীক্ষা কইরা নেওয়ার জন্য কারিগরের খোঁজ করেন।', 'http://localhost:8080/belhasa/public/audio/FLD014-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-C-BEN.mp3'),
(3143, 451, '9', '当你成功的通过被洪水淹没的区域后，重要的是', '保持较低的车速，并寻找安全的地方停车', '恢复刹车效能', '找一个机械师检查你的刹车系统', 'http://localhost:8080/belhasa/public/audio/FLD014-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-C-CHS.mp3'),
(3144, 451, '10', 'Как только вы успешно\r\nпроедете через\r\nзатопленную местность,\r\nважно', 'ехать на\r\nмедленной\r\nскорости и\r\nискать\r\nбезопасное\r\nместо для\r\nпарковки.', 'восстановить\r\nэффективность\r\nтормозов.', 'найти механика для\r\nпроверки\r\nэффективности вашей\r\nтормозной системы.', 'http://localhost:8080/belhasa/public/audio/FLD014-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD014-C-RUS.mp3'),
(3145, 451, '5', 'जब पानी से भरा क्षेत्र पार हो जाए तो यह महत्वपूर्ण है कि', 'धीमी गति बनाए रखें और सुरक्षिकत पार्कि स्थल खोजें।', 'धीमी गति बनाए रखें और सुरक्षिकत पार्कि स्थल खोजें।', 'एक मैकेनिक खोजें जो आपके ब्रेक सिस्टम की दशा की जाँच कर सके।', '', '', '', ''),
(3146, 452, '1', 'After passing through flood, it is best to have your car checked because,', 'The car\'s sensitive electronics may malfunction.', 'The car navigation\r\nsystem may malfunction.', 'Most modern cars cannot be driven through flood.', 'http://localhost:8080/belhasa/public/audio/Recording (11).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (11).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (11).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (11).m4a'),
(3147, 452, '3', 'بعد مرورك من المنطقه المغمورة بالمياه فمن الافضل ان تقوم بفحص مركبتك', 'أن الاجهزة الالكترونيه الحساسه قد تتعطل', 'لان نظام الملاحه بالمركبه قد يتعطل', 'لأن معظم السيارات  الحديثه لايمكن قيادتها في طرق مغمورة بالمياه', 'http://localhost:8080/belhasa/public/audio/FLD015-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-C-ARA.mp3'),
(3148, 452, '4', 'پانی میں سے گذرنے کےبعد اپنی گاڑی کا معائنہ کرنا بہتر ہوتا ہے کیونکہ', 'گاڑی کے حساس الیکٹرونک آلات میں خرابی پیدا ہوسکتی ہے۔', 'گاڑی میں راستہ بتانے والے نظام میں خرابی پیدا ہوسکتی ہے', 'بہت سی جدید گاڑیوں کو پانی میں سے نہیں گذارا جاسکتا۔', 'http://localhost:8080/belhasa/public/audio/FLD015-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-C-URD.mp3'),
(3149, 452, '6', 'বন্যা কবলিত এলাকাটি পার করার পর, আপনার গাড়ি পরীক্ষা কইরা নেওয়া দরকার কারন', 'গাড়ির সংবেদনশীল বৈদ্যুতিক যন্ত্রগুলির ঠিকঠাক কার্যকর নাও থাকতে পারে।', 'গাড়ির সূচক ব্যবস্থা ঠিকঠাক কার্যকর নাও থাকতে পারে।', 'অনেক নতুন ধরনের গাড়ি বন্যায় চালানো যায় না।', 'http://localhost:8080/belhasa/public/audio/FLD015-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-C-BEN.mp3'),
(3150, 452, '9', '通过洪水后，最好是去检查一下你的车，因为', '该车敏感的电子设备可能出现故障', '汽车导航系统可能出现故障', '大多数现代的车辆不能驶过洪水', 'http://localhost:8080/belhasa/public/audio/FLD015-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-C-CHS.mp3'),
(3151, 452, '10', 'После того, как вы\r\nпроехали затопленную\r\nместность,\r\nрекомендуется\r\nотправить машину на\r\nпроверку, потому что', 'может случиться\r\nсбой в\r\nчувствительной\r\nэлектронной\r\nсистеме машины.', 'может случиться\r\nсбой в\r\nнавигационной\r\nсистеме машины.', 'большая часть\r\nсовременных машин\r\nне рассчитаны на\r\nпроезд по\r\nзатопленной\r\nместности.', 'http://localhost:8080/belhasa/public/audio/FLD015-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/FLD015-C-RUS.mp3'),
(3152, 452, '5', 'पानी भरे हुए क्षेत्र को पार करने बाद आपनी कार को चेक करवाना सबसे अच्छा है क्योंकि', 'कार के संवेदनशील इलेक्ट्रनिक खराब हो सकते हैं।', 'कार का संवेदनशील सिस्टम खराब हो सकता है।', 'सबसे आधनिक कारों को भी भरे हुए पानी में नहीं चलाया जा सकता है।', '', '', '', ''),
(3153, 453, '1', 'Mobile phones distract drivers and cause them to', 'change direction suddenly.', 'maintain focus on the road', 'use other routes', 'http://localhost:8080/belhasa/public/audio/Recording (12).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (12).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (12).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (12).m4a'),
(3154, 453, '3', 'استخدام الهاتف أثناء القيادة يصرف أنتباة السائق', 'يؤدي الى تغيير أتجاة السير بسرعه', 'يعين السائق على التركيز على الطريق', 'يتسبب في أستخدام السائق لطرق اخرى', 'http://localhost:8080/belhasa/public/audio/MP021-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-C-ARA.mp3'),
(3155, 453, '4', 'موبائل فون سے ڈرائیوروں کی توجہ ہٹ جاتی ہے اور اس وجہ سے وہ', 'اچانک سمت تبدیل کرلیتے ہیں', 'سڑک پر توجہ مرکوز رکھتے ہیں', 'دوسرا راستہ اختیار کرلیتے ہیں۔', 'http://localhost:8080/belhasa/public/audio/MP021-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-C-URD.mp3'),
(3156, 453, '6', 'মোবাইল ফোন চালকের মনোযোগ নষ্ট কইরা দেয় এবং কারন হয়', 'হঠাৎ অভিমুখ পরিবর্তনের', 'রাস্তা উপর মনোনিবেশ বজায় রাখা', 'অন্য রাস্তা ব্যবহার করার', 'http://localhost:8080/belhasa/public/audio/MP021-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-C-BEN.mp3'),
(3157, 453, '9', '使用手机会分散驾驶员的注意力，并导致他们', '突然改变方向', '保持专注于道路', '使用其他路线', 'http://localhost:8080/belhasa/public/audio/MP021-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-C-CHS.mp3'),
(3158, 453, '10', 'Мобильные телефоны\r\nотвлекают водителей и\r\nстановятся причиной', 'внезапной\r\nсмены\r\nнаправления.', 'сосредоточенности\r\nна дороге', 'использования других\r\nпутей', 'http://localhost:8080/belhasa/public/audio/MP021-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP021-C-RUS.mp3'),
(3159, 453, '5', 'मोबाइल फोन चालक का ध्यान भंग करते हैं और इसके फलस्वरुप', 'अचानक दशा परिवर्तन हो सकती है।', 'सड़क पर ध्यान केंद्रत रह सकता है।', 'वह दूसरे रास्तों का प्रयोग करता है।', '', '', '', ''),
(3160, 454, '1', 'Using mobile phone affects the focus of drivers, it shows in their', 'Full attention to driving.', 'Steady hands on the\r\nsteering wheel.', 'Inconsistent driving.', 'http://localhost:8080/belhasa/public/audio/Recording (13).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (13).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (13).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (13).m4a'),
(3161, 454, '3', 'استخدام الهاتف أثناء القيادة يؤثر على تركيز السائق من خلال', 'تركيزة الكامل في القيادة', 'ثبات اليدين على عجله القيادة', 'عدم الثبات والتناغم في طريقه القيادة', 'http://localhost:8080/belhasa/public/audio/MP022-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-C-ARA.mp3'),
(3162, 454, '4', 'موبائل فون کا استعمال ڈرائیور کی گاڑی چلانے پر توجہ پر اثر انداز ہوتا ہے اور اس کا اندازہ اس سے ہوتا ہے کہ وہ', 'گاڑی چلانے پر پوری توجہ رکھتے ہیں', 'اسٹیئرنگ آرام سے استعمال کرتے ہیں۔', 'غیریکساں طور پر گاڑی چلاتے ہیں۔', 'http://localhost:8080/belhasa/public/audio/MP022-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-C-URD.mp3'),
(3163, 454, '6', 'মোবাইল ফোন চালকের মনোযোগের উপর প্রভাব ফেলে, এটি দেখায় তাদের', 'চালনার প্রতি পূর্ন মনোযোগ।', 'স্টিয়ারিং হুইলের ওপরে স্হির হাত।', 'চালনায় অসংগতি।', 'http://localhost:8080/belhasa/public/audio/MP022-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-C-BEN.mp3'),
(3164, 454, '9', '使用手机会影响驾驶员的注意力，体现在他们', '全心全意的驾驶', '双手握住方向盘', '变化无常的驾驶', 'http://localhost:8080/belhasa/public/audio/MP022-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-C-CHS.mp3'),
(3165, 454, '10', 'Использование\r\nмобильных телефонов\r\nвлияет на концентрацию\r\nводителей, это\r\nпроявляется в', 'Полном\r\nвнимании к\r\nвождению.', 'Уверенном обхвате\r\nруля.', 'Непоследовательности\r\nвождения.', 'http://localhost:8080/belhasa/public/audio/MP022-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/MP022-C-RUS.mp3'),
(3166, 454, '5', 'मोबाइल फोन इस्तेमाल चालकों के ध्यान को प्रभावित करता है। इसको उनकी इस अवस्था से पहचाना जा सकता है।', 'वाहन चलाने में पूरे ध्यान से।', 'स्टीयरिंग व्हील पर स्थिर हाथों से।', 'अस्थिर वाहन चालन से।', '', '', '', ''),
(3167, 455, '1', 'Drive on the safe side and\r\navoid', 'talking on mobile phone while parked', 'jumping the queue just to get a few meters ahead', 'signaling while lane changing', 'http://localhost:8080/belhasa/public/audio/Recording (14).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (14).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (14).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (14).m4a'),
(3168, 455, '3', '106- قد مركبتك بالجانب الآمن من الطريق وتفادى', 'استخدام الهاتف عند ايقاف المركبه', 'تجاوز طابورالمركبات فقط للحصول على بعض الامتارالى الامام', 'التاشيراثناء تغير الممر', 'http://localhost:8080/belhasa/public/audio/UB029-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-C-ARA.mp3'),
(3169, 455, '4', 'گاڑی چلاتے وقت محفوظ رہنے کےلئے اجتناب کریں کہ', 'گاڑی کھڑی ہونے کی صورت میں موبائل فون پر بات کریں۔', 'ایک لین سے دوسری لین میں چلے جائیں تاکہ کچھ میٹر آگے بڑھ سکیں۔', 'لین تبدیل کرتے وقت اشارہ استعمال کریں۔', 'http://localhost:8080/belhasa/public/audio/UB029-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-C-URD.mp3'),
(3170, 455, '6', 'UB029-STEM-BEN', 'UB029-A-BEN', 'UB029-B-BEN', 'UB029-C-BEN', 'http://localhost:8080/belhasa/public/audio/পার্ক করার সময় মোবাইলে কথা বলা.mp3', 'http://localhost:8080/belhasa/public/audio/আপনার চালনার কিছু সময় বাচাইয়া দেয়।.mp3', 'http://localhost:8080/belhasa/public/audio/পথ বদলানোর সময় সিগন্যাল দেওয়া.mp3', ''),
(3171, 455, '9', '安全驾驶起见，并避免', '停车时使用手机对话', '为了前进几米而插队', '换道时打信号', 'http://localhost:8080/belhasa/public/audio/UB029-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-C-CHS.mp3'),
(3172, 455, '10', 'Выбирайте безопасный\r\nпуть и старайтесь не', 'говорить по\r\nмобильному\r\nтелефону, когда\r\nмашина\r\nприпаркована', 'перескакивать\r\nочередь только\r\nчтобы вырваться\r\nвперед на несколько\r\nметров', 'включать сигналы во\r\nвремя смены полосы', 'http://localhost:8080/belhasa/public/audio/UB029-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/UB029-C-RUS.mp3'),
(3173, 455, '5', 'सुरक्षित वाहन चलाए और इस बातों से बचें', 'कार के पार्क होने पर मोबाइल पर बात करने से', 'कुछ मीटर आगे बढ़ने के लिये कतार लाँघने से', 'लेन बदलते समय संकेत देने से', '', '', '', ''),
(3174, 456, '1', 'Driving in a safe manner', 'can be done by all drivers if they decide to.', 'can be done in the\r\npresence of the police', 'can be done in urban\r\nareas', 'http://localhost:8080/belhasa/public/audio/Recording (15).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (15).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (15).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (15).m4a'),
(3175, 456, '3', 'القيادة بطريقة آمنة .', 'يمكن لجميع السائقين القيام بها إذا قرروا ذلك', 'يمكن القيام بها إذا تواجدت الشرطة', 'يمكن القيام بها في المناطق الحصرية', 'http://localhost:8080/belhasa/public/audio/RM041-STEM-ARA.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-A-ARA.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-B-ARA.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-C-ARA.mp3'),
(3176, 456, '4', 'محفوظ طور پر گاڑی چلانے کا انداز', 'اگر تمام ڈرائیوراسے کرنے کا فیصلہ کرلیں تو اختیار کیا جاسکتا ہے', 'پولیس کی موجودگی میں ہی اختیار کیا جاسکتا ہے', 'شہری آبادی والے علاقوں میں ہی اختیار کیا جاسکتا ہے', 'http://localhost:8080/belhasa/public/audio/RM041-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-C-URD.mp3'),
(3177, 456, '6', 'নিরাপদ পদ্ধতিতে গাড়রি চালনা', 'সমস্ত চালকদের দ্বারা হইতে পারে যদি তারা মনস্থর করে।', 'পুলিশের উপস্থিতিতে করা যাইতে পারে', 'শহরাঞ্চলে করা যাইতে পারে', 'http://localhost:8080/belhasa/public/audio/RM041-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-C-BEN.mp3'),
(3178, 456, '9', '以安全方式驾驶', '如果驾驶员决定如此做，所有的驾驶员都可以做到', '在警方的监督下可以做到', '可以在市区做到', 'http://localhost:8080/belhasa/public/audio/RM041-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-C-CHS.mp3'),
(3179, 456, '10', 'Водить безопасно', 'могут все\r\nводители, если\r\nтолько захотят.', 'можно в присутствии\r\nполиции', 'можно в городской\r\nместности', 'http://localhost:8080/belhasa/public/audio/RM041-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/RM041-C-RUS.mp3'),
(3180, 456, '5', 'सुरक्षित तरीके से वाहन चलाना', 'सब चालक कर सकते हैं अगर वे निश्र्च कर लें।', 'पुलिस की उपस्थिति में हो सकता है।', 'शहरि क्षेत्रों में हो सकता है।', '', '', '', ''),
(3181, 457, '1', 'Drivers must use of indicators appropriately while driving.', 'This is required by the UAE traffic law.', 'This is not required by the UAE traffic law.', 'This is required by the\r\ntransport industry.', 'http://localhost:8080/belhasa/public/audio/Recording (16).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (16).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (16).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (16).m4a'),
(3182, 457, '3', '178- السائقون مطالبون بتشغيل الاشارات بشكل صحيح اثناء القيادة', 'هذا متطلب من متطلبات قانون السير الاماراتي', 'هذا ليس متطلبا من متطلبات قانون السير الاماراتي', 'هذا متطلب من متطلبات صناعه النقل', 'http://localhost:8080/belhasa/public/audio/TL101-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-C-ARA.mp3'),
(3183, 457, '4', 'ڈرائیوروں کو گاڑی چلانے کے دوران درست طور پر اشارے استعمال کرنا ضروری ہیں۔ کیونکہ', 'ایسا کرنا یو۔اے۔ای کے ٹریفک قوانین کی ضرورت ہے', 'ایسا کرنا یو۔اے۔ای کے ٹریفک قوانین کی ضرورت نہیں ہے', 'ایسا کرنا نقل وحمل کی صنعت کی ضرورت ہے', 'http://localhost:8080/belhasa/public/audio/TL101-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-C-URD.mp3'),
(3184, 457, '6', 'চালকদের গাড়ি চালনার সময় অবশ্যই নির্দেশকের সঠিক ব্যবহার করতে হইব।', 'UAE ট্রাফিক আইনের জন্য এটি প্রয়োজনীয়।', 'UAE ট্রাফিক আইনের জন্য এটি প্রয়োজনীয় নয়।', 'এটি পরিবহন শিল্পের জন্য প্রয়োজনীয়।', 'http://localhost:8080/belhasa/public/audio/TL101-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-C-BEN.mp3'),
(3185, 457, '9', '驾驶员在驾驶时必须正确使用指示灯', '这是由阿联酋交通法所规定的', '不是由阿联酋交通法所规定的', '这是运输行业所规定的', 'http://localhost:8080/belhasa/public/audio/TL101-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-A-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-B-CHN.mp3.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-C-CHS.mp3'),
(3186, 457, '10', 'Водители должны\r\nправильно использовать\r\nиндикаторы поворота\r\nпри езде.', 'Этого требуют\r\nправила\r\nдорожного\r\nдвижения ОАЭ.', 'Правила дорожного\r\nдвижения ОАЭ этого\r\nне требуют.', 'Этого требует\r\nтранспортная\r\nпромышленность.', 'http://localhost:8080/belhasa/public/audio/TL101-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/TL101-C-RUS.mp3'),
(3187, 457, '5', 'चालकों को वाहन चलाते समय संकेतों का उिचत प्रयोग करना चाहिये क्योंकि', 'यह यूएई के यातायात कानून के अनुसार आवश्यक है।', 'यह यूएई के यातायात कानून के अनुसार आवश्यक नहीं है।', 'यह यातायात उध्योग के अनुसार आवश्यक है।', '', '', '', ''),
(3188, 458, '1', 'Inexperienced drivers have increased chances of crash risk because', 'they have improved driving skills', 'they are always in a\r\nhurry', 'they are less able to predict possible problems', 'http://localhost:8080/belhasa/public/audio/Recording (17).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (17).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (17).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (17).m4a'),
(3189, 458, '3', 'السائقون عديمي الخبرة يكونون أكثر عرضه للمخاطر؟', 'لان لديهم مهارات قيادة متطورة', 'لانهم في عجله من آمرهم دايما', 'لان قدرتهم على التنبؤ بالمشاكل المحتمله قليله', 'http://localhost:8080/belhasa/public/audio/LMV001-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-C-ARA.mp3'),
(3190, 458, '4', 'نا تجربہ کار ڈرائيوروں سے حادثہ سرزد ہونے کے امکانات زيادہ ہوتے ہيں کيونکہ', 'وہ گاڑی چالانےميں مہارت حاصل کرچکے ہوتےہيں', 'وہ ہميشہ جلدی ميں ہوتے ہيں', 'ان ميں ممکنہ حطرات بھانپنے کی صلاحيت کم ہوتی ہے', 'http://localhost:8080/belhasa/public/audio/LMV001-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-C-URD.mp3'),
(3191, 458, '6', 'অনভিজ্ঞ গাড়ি চালকদের দূর্ঘটনার ঝুঁকি অনেক বেড়ে গেসে কারন', 'তারা তাদের চালানোর ক্ষমতার উন্নতি ঘটাইসে', 'তারা সদাই থাকে ব্যস্ততার‍‍‌‌‌ মধ্যে', 'তারা সচরাচর আসন্ন বিপদ সম্বন্ধে অবগত থাকে না', 'http://localhost:8080/belhasa/public/audio/LMV001-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-C-BEN.mp3'),
(3192, 458, '9', '没有经验的驾驶员会增加发生交通事故的风险， 是因为：', 'LMV001-STEM-CHN.mp3', 'LMV001-A-CHN.mp3', 'LMV001-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-C-CHS.mp3'),
(3193, 458, '10', 'У неопытных водителей\r\nвыше шанс попасть в\r\nаварию, потому что', 'они еще\r\nсовершенствуют\r\nсвои навыки\r\nвождения', 'они постоянно\r\nторопятся', 'им не хватает умения\r\nпредугадать\r\nвозможные проблемы', 'http://localhost:8080/belhasa/public/audio/LMV001-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV001-C-RUS.mp3'),
(3194, 458, '5', 'जिन ड्राइवरों को गाडी चलाने का अनुभव नहीं है उनके दुवारा टक्कर लगने के खतरे की सम्भावना अधिक होती है, क्यों क', 'उनकी ड्राइवरों का हुनर बहुत बेहतर होता है', 'वै हमेशा जल्दी में होते हैं', 'वै आने वाली समस्याओं का अंदाज़ा लगाने में कम काबिल होते ह', '', '', '', ''),
(3195, 459, '1', 'How long does it take to\r\nlearn to be a good driver?', 'About 15 hours of driving practice', 'About 6 months of\r\ndriving practice', 'Many years of driving practice', 'http://localhost:8080/belhasa/public/audio/Recording (18).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (18).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (18).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (18).m4a'),
(3196, 459, '3', 'ماهي المدة التى تحتاجها لكى تتعلم ان تكون سائقا جيدا ؟', 'حوالى 15 ساعه تدريب على القيادة', 'حوالى 6 أشهر تدريب عللى القيادة', 'عدة سنوات من التدريب على القيادة', 'http://localhost:8080/belhasa/public/audio/LMV002-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-C-ARA.mp3'),
(3197, 459, '4', 'ایک اچھا ڈرائیور بننے کےلۓ کتنا وقت درکار ہوتا ہے؟', 'تقریبا\" 15 گھنٹے تربیتی مشق حاصل کرنے سے', 'تقریبا\" 6 مہینے گاڑی چلانے کی مشق کرنے سے', 'گاڑی چلانے کی مشق کے کئی سال', 'http://localhost:8080/belhasa/public/audio/LMV002-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-C-URD.mp3'),
(3198, 459, '6', 'একজন ভাল  চালক হইতে গেলে কত সময় ধইরা শিখা উচিৎ?', 'প্রায় ১৫ ঘন্টা চালনা অনুশীলন', 'প্রায় ৬ মাস চালনা অনুশীলন', 'অনেক বছর চালনা অনুশীলন', 'http://localhost:8080/belhasa/public/audio/LMV002-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-C-BEN.mp3'),
(3199, 459, '9', '学习多久能成为一个很好的驾驶员？', 'LMV002-STEM-CHN.mp3', 'LMV002-A-CHN.mp3', 'LMV002-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-C-CHS.mp3'),
(3200, 459, '10', 'Сколько нужно времени,\r\nчтобы стать хорошим\r\nводителем?', 'около 15 часов\r\nпрактики вождения', 'около 6 месяцев\r\nпрактики вождения', 'много лет практики\r\nвождения', 'http://localhost:8080/belhasa/public/audio/LMV002-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV002-C-RUS.mp3');
INSERT INTO `questions_translations` (`id`, `questionid`, `language`, `question`, `choice1`, `choice2`, `choice3`, `audio`, `option1audio`, `option2audio`, `option3audio`) VALUES
(3201, 459, '5', 'एक अच्छा ड्राइवर बनने के लिए कितना समय लगता है ?', 'करीब १५ घंटे का ड्राइविंग अभ्यास', 'करब ६ महीने का ड्राइविंग अभ्यास', 'कई बर्षों का ड्राइविंग अभ्यास', '', '', '', ''),
(3202, 460, '1', 'What is the main factor that\r\nhelps you to be a better\r\ndriver?', 'Being confident.', 'Undertaking as many\r\nlessons as possible.', 'Tackling difficult driving\r\nsituations when you are\r\na new driver.', 'http://localhost:8080/belhasa/public/audio/Recording (19).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (19).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (19).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (19).m4a'),
(3203, 460, '3', 'ماهو العامل الاساسي الذي يساعدك لكي تكون سائقا أفضل ؟', 'الثقه بالنفس', 'أخذ أكبر عدد من الدروس', 'التعامل مع حالات القيادة الصعبه عندما تكون سائقا جيدا', 'http://localhost:8080/belhasa/public/audio/LMV003-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-C-ARA.mp3'),
(3204, 460, '4', 'وہ کون سی بنیاد ہے جس پر آپ بہتر ڈرائیور بن سکتے ہیں؟', 'پراعتماد ہونا', 'جتنے زیادہ گھنٹے  ممکن ہوسکے تربیتی مشق کرنا', 'جب آپ نئے ڈرائیور ہوں تو اس وقت مشکل حالات سے نمٹنا', 'http://localhost:8080/belhasa/public/audio/LMV003-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-C-URD.mp3'),
(3205, 460, '6', 'কোন বিশেষ কারণটি আপনাকে একজন ভাল ড্রাইভার হইতে সাহায্য করে?', 'আত্মবিশ্বাসী হওয়া।', 'যত বেশী সম্ভব,প্রশিক্ষণ গ্রহণ করা', 'একজন নতুন চালক হিসাবে কঠিন চালনা পরিস্থিতির মোকাবেলা করা', 'http://localhost:8080/belhasa/public/audio/LMV003-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-C-BEN.mp3'),
(3206, 460, '9', '成为一个优秀的驾驶员的最主要因素是什么？', 'LMV003-STEM-CHN.mp3', 'LMV003-A-CHN.mp3', 'LMV003-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-C-CHS.mp3'),
(3207, 460, '10', 'Какой фактор играет\r\nключевую роль в\r\nулучшении ваших\r\nводительских навыков?', 'Уверенность в себе.', 'Максимально частая\r\nпрактика.', 'Разрешение сложных\r\nдорожных ситуаций на\r\nначальном этапе.', 'http://localhost:8080/belhasa/public/audio/LMV003-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV003-C-RUS.mp3'),
(3208, 460, '5', 'आपको एक अच्छा ड्राइवर बनाने में सबसे सहायक बात कौनसी है ?', 'खुद पे भरोसा होना', 'जतनी सम्भव हो उतनी अधिक तालीम लेना', 'जब आप नए नए ड्राइवर बने हों तब कठिन ड्राइविंग परिस्थितयों का सामना\r\nकरना', '', '', '', ''),
(3209, 461, '1', 'New drivers have a high\r\ncrash rate because they', 'have not done many\r\nhours of driving\r\npractice.', 'ck confidence in their\r\ndriving skills.', 'can be distracted by other peoples advice.', 'http://localhost:8080/belhasa/public/audio/Recording (20).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (20).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (20).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (20).m4a'),
(3210, 461, '3', 'السائقون الجدد يتعرضون لنسبه عاليه من حوادث الاصطدام لأنهم ؟', 'لم يكملوا عدة ساعات من التدريب على القيادة', 'تنقصهم الثقه بمهارات القيادة', 'يمكن ان يفقدوا التركيز نتيجه لنصيحه من أشخاص آخرين', 'http://localhost:8080/belhasa/public/audio/LMV004-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-C-ARA.mp3'),
(3211, 461, '4', 'نئے ڈرائیوروں کے حادثات  کی شرح زیادہ ہونے کی وجہ یہ ہے کہ', 'انہوں نے گاڑی چلانے کی مشق کافی گھنٹوں نہیں کی ہوتی', 'وہ اپنی گاڑی چلانے کی مہارات کے بارے میں پراعتماد نہیں ہوتے', 'دوسرے لوگوں کی ہدایت کی وجہ سے ان کی توجہ گاڑی چلانے سے ہٹ جاتی ہے', 'http://localhost:8080/belhasa/public/audio/LMV004-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-C-URD.mp3'),
(3212, 461, '6', 'নতুন ড্রাইভারদের দুর্ঘটনায় হার খুব বেশী কারন', 'তারা দীর্ঘক্ষন ধইরা চালনার অনুশীলন করে না', 'তাদের গাড়ী চালন ক্ষমতার প্রতি আস্থার অভাব', 'অন্যান্য মানুষের উপদেশ দ্বারা বিভ্রান্ত হইতে পারেন।', 'http://localhost:8080/belhasa/public/audio/LMV004-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-C-BEN.mp3'),
(3213, 461, '9', '新的驾驶员有较高的事故率，是因为：', 'LMV004-STEM-CHN.mp3', 'LMV004-A-CHN.mp3', 'LMV004-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-C-CHS.mp3'),
(3214, 461, '10', 'Водители-новички часто\r\nпопадают в аварии, потому\r\nчто они', 'имели мало\r\nпрактики.', 'недостаточно уверены\r\nв своих водительских\r\nнавыках.', 'отвлекаются из-за\r\nсоветов со стороны.', 'http://localhost:8080/belhasa/public/audio/LMV004-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV004-C-RUS.mp3'),
(3215, 461, '5', 'नए ड्राइवरों के दुवारा ज्यादा टक्करें लगती हैं क्योंकि', 'उन्हौंने कई घंटो का ड्राइविंग अभ्यास नहीं किया होता है', 'उन्हें अपनी ड्राइवरी के हुनर पर भरोसा नहीं होता है', 'दूसरे लोगों की सलाह से उनका ध्यान भंग हो जाता है', '', '', '', ''),
(3216, 462, '1', 'Driving is more dangerous if\r\nyou', 'have noisy passBNGers\r\nin your car.', 'do not keep your car\r\nclean and tidy.', 'go on long drives regularly.', 'http://localhost:8080/belhasa/public/audio/Recording (21).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (21).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (21).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (21).m4a'),
(3217, 462, '3', 'القيادة تكون اكثر خطورة ؟', 'أذا كان هناك ركاب تصدر عنهم ضجه في سيارتك', 'اذا لم تحافظ على نظافه وترتيب سيارتك', 'اذا كنت تقود لمسافات طويله بانتظام \r\nاذا كنت تقود لمسافات طويله بانتظام', 'http://localhost:8080/belhasa/public/audio/LMV005-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-C-ARA.mp3'),
(3218, 462, '4', 'گاڑی چلانا بہت ہی خطرناک ہوسکتا ہے اگر آپ', 'اپنی کار میں شورغل کرنے والے مسافر بٹھائیں', 'اپنی کار کو صاف اور ستھرا نہ رکھیں', 'اگر روزانہ لمبے سفر پر جائیں', 'http://localhost:8080/belhasa/public/audio/LMV005-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-C-URD.mp3'),
(3219, 462, '6', 'গাড়ি চালনা আরও বিপজ্জনক হইতে পারে   যদি', 'আপনার গাড়ীতে গোলমাল সৃষ্টিকারী যাত্রী থাকে।', 'আপনার গাড়ী পরিষ্কার এবং গোছানো  না রাখেন।', 'নিয়মিত দীর্ঘ যাত্রা করেন', 'http://localhost:8080/belhasa/public/audio/LMV005-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-C-BEN.mp3'),
(3220, 462, '9', '驾驶会变得更危险，如果你：', 'LMV005-STEM-CHN.mp3', 'LMV005-A-CHN.mp3', 'LMV005-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-C-CHS.mp3'),
(3221, 462, '10', 'Вождение связано с\r\nповышенным риском, когда\r\nвы', 'везете шумных\r\nпассажиров.', 'не поддерживаете в\r\nмашине чистоту и\r\nпорядок.', 'регулярно\r\nотправляетесь в\r\nдлинные поездки.', 'http://localhost:8080/belhasa/public/audio/LMV005-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV005-C-RUS.mp3'),
(3222, 462, '5', 'ड्राइविंग अधिक खतरनाक हो जाती है अगर', 'आपकी कार में बैठे हुए यात्री बहुत शोर मचा रहे हों', 'आप अपनी कार को साफ़ सुथरा नहीं रखते हों', 'आप नियमित रूप से लम्बी दूरी तक ड्राइव करते हों', '', '', '', ''),
(3223, 463, '1', 'While driving a \'headcheck\'\r\nmeans:', 'Keeping your head still at all times', 'Checking that you can see behind you in your side mirrors', 'Looking over your shoulders to see through the side\r\nwindows', 'http://localhost:8080/belhasa/public/audio/Recording (22).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (22).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (22).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (22).m4a'),
(3224, 463, '3', '6- عند القيادة (ألتفاته الراس ) تعني ؟', 'الابقاء على ثبات راسك في كل الاوقات', 'التحقق من انه بامكانك رؤيه خلفك في مراياك الجانبيه', 'النظر من فوق كتفيك من خلال النوافذ الجانبيه الخلفيه', 'http://localhost:8080/belhasa/public/audio/LMV006-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-C-ARA.mp3'),
(3225, 463, '4', 'گاڑی چلانے کے دوران \" ہیڈچیک\" کرنے کا مطلب ہے', 'تمام وقت اپنے سر کو نہ ہلانا', 'اپنے جانبی شیشوں سے جو دیکھ سکتے ہوں صرف وہی کچھ دیکھنا', 'اپنے کندھوں کے اوپر سے   کھڑکی میں سے پیچھے دیکھنا', 'http://localhost:8080/belhasa/public/audio/LMV006-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-C-URD.mp3'),
(3226, 463, '6', 'গাড়ী চালানোর সময় একটি \'headcheck\'অর্থ হইল:', 'সব সময় আপনার মাথা স্থির  রাখা', 'পার্শ্ব আয়নায়  আপনার পিছনে দেখতে পারেন কিনা তা পরীক্ষা কইরা দেখা', 'নিজের কাঁধের উপর  দিয়া পাশের জানালার মাধ্যমে দেখা', 'http://localhost:8080/belhasa/public/audio/LMV006-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-C-BEN.mp3'),
(3227, 463, '9', '在驾驶过程中，“起步检查”的意思是：', 'LMV006-STEM-CHN.mp3', 'LMV006-A-CHN.mp3', 'LMV006-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-C-CHS.mp3'),
(3228, 463, '10', '\"Headcheck\" при вождении\r\nзначит:', 'Все время держать\r\nголову неподвижной', 'Проверить, доступен\r\nли вам задний обзор\r\nчерез зеркала заднего\r\nвида', 'Осмотреться по\r\nсторонам через\r\nбоковые окна', 'http://localhost:8080/belhasa/public/audio/LMV006-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV006-C-RUS.mp3'),
(3229, 463, '5', 'ड्राइव करते समय \"हैड चैक\" का मतलब क्या होता है', 'पूरे वत्क अपना सर बिना हिलाए डुलाए रखना', 'यह चैक करना कि आप दाएं बांए वाले शीशे से पीछे की चीजों को देख पा रहे', 'गर्दन धुमा के अगल बगल वाली खिडकी से पीछे आने वालों को देखना', '', '', '', ''),
(3230, 464, '1', 'You are driving vehicle A. Before you move into the left lane you should', 'sound your horn to warn other drivers.', 'do a headcheck to\r\nensure there is room for you in front of vehicle B.', 'move towards the left lane and check that the driver of vehicle B will give way to you.', 'http://localhost:8080/belhasa/public/audio/Recording (23).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (23).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (23).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (23).m4a'),
(3231, 464, '3', 'أنت تقود المركبه     قبل أن تتحرك الى المسار الايمن يجب أن ؟', 'يجب أن تستعمل جهاز ( الزمور) لتحذير السائقين الآخرين', 'تقوم بالتفاته الراس للتأكد من وجود فجوة لك امام المركبه B', 'تتحرك الى المسار الايمن وتتأكد من أن سائق المركبه    سيعطيك الطريق', 'http://localhost:8080/belhasa/public/audio/LMV007-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-C-ARA.mp3'),
(3232, 464, '4', 'آپ  گاڑی     چلا رہے ہیں۔ بائیں لین میں جانے سے پہلے آپ کو چاہئیے کہ', 'دوسرے ڈرائیوروں کو خبردار کرنے کے لۓ ہارن بجائیں', 'گاڑی     کے آگے آپ کے لۓ جگہ موجود ہونے کو دیکھنے کے لۓ ہیڈچیک کا عمل کریں۔', 'بائیں لین کی جانب جائیں اور دیکھیں کہ گاڑی    کا ڈرائیور آپ کو راستہ دیتا ہے یا نہیں', 'http://localhost:8080/belhasa/public/audio/LMV007-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-C-URD.mp3'),
(3233, 464, '6', 'A গাড়ি চালানোর সময় বাম দিকের গলিতে ঢোকার আগে,আপনার উচিত', 'হর্ন বাজাইয়া অন্যান্য ড্রাইভার দের সতর্ক কইরা দেওয়া', 'গাড়ি বি-এর সামনে আপনার জন্য জায়গা আছে কিনা, একটি headcheck করে তা নিশ্চিত কইরা দেওয়া', 'বাম দিকের গলি দিকে অগ্রসর হইতে থাকেন,এবং B গাড়ির চালক আপনাকে পথ দেয় কিনা দেইখা নেওয়া', 'http://localhost:8080/belhasa/public/audio/LMV007-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-C-BEN.mp3'),
(3234, 464, '9', '你在驾驶车辆A，在进入左侧车道前，你应该：', 'LMV007-STEM-CHN.mp3', 'LMV007-A-CHN.mp3', 'LMV007-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-C-CHS.mp3'),
(3235, 464, '10', 'Вы - водитель машины А.\r\nПеред тем, как\r\nперестроиться на левую\r\nполосу, вы должны', 'надавить на\r\nклаксон, чтобы\r\nпредупредить\r\nдругих водителей.', 'сделать \"headcheck\",\r\nчтобы проверить, что\r\nдля вас есть место\r\nперед машиной Б.', 'направиться в сторону\r\nлевой полосы и\r\nудостовериться, что\r\nводитель Б вас\r\nпропустит.', 'http://localhost:8080/belhasa/public/audio/LMV007-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV007-C-RUS.mp3'),
(3236, 464, '5', 'अगर आप \"ए\" गाड चला रहे हैं तो बांए(लैफ्ट) तरफ वाली लेन में आने के लिए आपको', 'दूसरे ड्राइवर को सचेत करने के लिए हॉर्न बजाना चाहिए', 'आपको हैड चैक करना चाहिए ताकि आप यह पक्का कर सकें, कि गाडी\r\n\"बी\' के आगे आने के लिए आपके पास जगह है या नहीं', 'बांए (लैफ्ट) तरफ आने वाली लेन को चैक करें ताकि \"बी\' गाडी का ड्राइवर आपको आने के लिए जगह दे दे', '', '', '', ''),
(3237, 465, '1', 'New Drivers are more likely to crash because they often drive', 'too close to the vehicle in front.', 'too slowly.', 'all over the road.', 'http://localhost:8080/belhasa/public/audio/Recording (24).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (24).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (24).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (24).m4a'),
(3238, 465, '3', 'السائقون الجدد هم أكثر احتمالا للتعرض لحوادث الاصطدام لانهم يميلون للقيادة ؟', 'على مسافه قريبه جدا من المركبه التى أمامهم', 'ببطء شديد', 'في اي مكان على الطريق', 'http://localhost:8080/belhasa/public/audio/LMV008-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-C-ARA.mp3'),
(3239, 465, '4', 'نيے ڈرائيوروں کے حادثات ميں ملوث ہونے کے امکانات زيادہ ہوتے ہيں کيونکہ وہ اکثر گاڑی چلاتے ہوۓ', 'اگلی گاڑی کے پيچھے بہت کم فاصلہ رکھتے ہيں', 'رفتار بہت آہستہ رکھتے ہيں', 'سڑک کے ہر حصہ ميں چلے جاتے ہيں', 'http://localhost:8080/belhasa/public/audio/LMV008-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-C-URD.mp3'),
(3240, 465, '6', 'নতুন চালকদের বিপর্যস্ত হওয়ার সম্ভাবনা বেশি কেননা প্রায়ই তারা গাড়ী চালায়', 'সামনের গাড়ির খুব কাছাকাছি থেকে', 'খুব ধীরে ধীরে', 'সমস্ত রাস্তা জুইড়া', 'http://localhost:8080/belhasa/public/audio/LMV008-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-C-BEN.mp3'),
(3241, 465, '9', '新的驾驶员更容易出交通事故，因为他们一般驾驶：', 'LMV008-STEM-CHN.mp3', 'LMV008-A-CHN.mp3', 'LMV008-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-C-CHS.mp3'),
(3242, 465, '10', 'Водители-новички чаще\r\nрискуют попасть в аварию,\r\nпотому что они водят', 'слишком близко к\r\nвпередиидущей\r\nмашине.', 'слишком медленно.', 'не придерживаясь\r\nсвоей полосы.', 'http://localhost:8080/belhasa/public/audio/LMV008-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV008-C-RUS.mp3'),
(3243, 465, '5', 'नये चालकों को दुर्घटना का अधिक खतरा होता है क्योंकि वे वाहन चलाते समय अक्सर', 'सामने वाले वाहन के बहुत पास चले जाते हैं।', 'बहुत धीमे चलते हैं।', 'पूरी सड़क पर यहाँ-वहाँ वाहन चलाते हैं।', '', '', '', ''),
(3244, 466, '1', 'New drivers tend to focus more on mechanical side of operations, this is risky period because,', 'they are not able to see the hazard', 'their reactions maybe\r\neither to too slow or\r\nexagerrated', 'their reactions are always late', 'http://localhost:8080/belhasa/public/audio/Recording (25).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (25).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (25).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (25).m4a'),
(3245, 466, '3', 'يميل السائقون الجدد الى التركيز اكثر على الجانب الميكانيكي  أثناء قيادة المركبه تعتبر هذه المرحله خطيرة ؟', 'لانه لايكون بمقدورهم  رؤيه الخطر', 'لان ردود فعلهم قد تكون اما بطيئه أو مبالغا فيها', 'لأن ردود فعلهم تكون دائما متاخرة', 'http://localhost:8080/belhasa/public/audio/LMV009-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-C-ARA.mp3'),
(3246, 466, '4', 'نۓ ڈرائيور گاڑی چلاتے کے تکنيکی عمل پر توجہ رکھتے ہيں ايسا کرنا خطرناک ہہے کيونکہ اس سے', 'وہ خطرات پرنظر رکھنے کےقابل نہيں ہوتے', 'ان کا ردعمل بہت سست يا حد سے زيادہ تيز ہوسکتا ہے', 'ان کا ردعمل ہمشيہ تاخير سے ہوتا ہے', 'http://localhost:8080/belhasa/public/audio/LMV009-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-C-URD.mp3'),
(3247, 466, '6', 'নতুন চালকরা,যন্ত্রপাতির দিকে আরও মনোনিবেশ করতে চায়, এইটি হয় ঝুঁকিপূর্ণ সময় কারন,', 'তারা বিপদ  বুঝতে সক্ষম হয় না', 'তাদের প্রতিক্রিয়া হয় খুব মন্থর বা অতিরঞ্জিত', 'তাদের প্রতিক্রিয়া সবসময় দেরীতে হয়', 'http://localhost:8080/belhasa/public/audio/LMV009-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-BEN.mp3'),
(3248, 466, '9', '新的驾驶员往往更重视机械方面的操作，这很危险，因为：', 'LMV009-STEM-CHN.mp3', 'LMV009-A-CHN.mp3', 'LMV009-B-CHN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-C-CHS.mp3'),
(3249, 466, '10', 'Водители-новички склонны\r\nуделять больше внимания\r\nтехнической стороне\r\nуправления, и такой период\r\nопасен, так как', 'это мешает им\r\nзаметить угрозу', 'их реакция\r\nоказывается или\r\nзамедленной, или\r\nчрезмерной', 'их реакция постоянно\r\nзапаздывает', 'http://localhost:8080/belhasa/public/audio/LMV009-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV009-C-RUS.mp3'),
(3250, 466, '5', 'नये चालक वाहन चलाते समय मैकेनिकल पक्ष पर अधिक घ्यान देते हैं, यह खतरनाक बात है क्योंकि', 'वे आस पास के खतरे को नहं देख पाते', 'कुछ गडबड दिखे तो या तो वे बहुत देर बाद सतर्क होते हैं या हडबडा जाते हैं', 'वे हमेशा देर से सतर्क होते हैं', '', '', '', ''),
(3251, 467, '1', 'Why is it important to scan the road scene when you drive?', 'It will help you stay awake.', 'You are more likely to\r\nanticipate potential\r\nhazards.', 'You will develop good vehicle control.', 'http://localhost:8080/belhasa/public/audio/Recording (26).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (26).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (26).m4a', 'http://localhost:8080/belhasa/public/audio/Recording (26).m4a'),
(3252, 467, '3', 'تفحص مشهد الطريق اثناء القيادة مهم جدا لان ذالك ؟', 'يساعدك على البقاء يقظا', 'يساعدك على توقع المخاطر المحتمله', 'يساعدك على التحكم الجيد بالمركبه', 'http://localhost:8080/belhasa/public/audio/LMV010-STEM-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-A-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-B-ARA.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-C-ARA.mp3'),
(3253, 467, '4', 'گاڑی چلانے کے دوران سڑک کے حالات کا مشاہدہ کرنا کیوں اہم ہے؟', 'ایسا کرنے سے آپ کو جاگتا رہنے میں مدد ملتی ہے', 'ایسا کرنے سے آپ سڑک پر موجود مخفی خطرات کی پیش بینی کرسکتے ہیں', 'ایسا کرنے سے آپ کو گاڑی کو بہتر طور پر قابو رکھنے کی  مہارت حاصل ہوتی ہے', 'http://localhost:8080/belhasa/public/audio/LMV010-STEM-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-A-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-B-URD.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-C-URD.mp3'),
(3254, 467, '6', 'যখন আপনি গাড়ী চালাইবেন,তখন রাস্তার দৃশ্য খুঁটাইয়া দেখা গুরুত্বপূর্ণ কেন?', 'এটি আপনি জাগ্রত থাকতে সাহায্য করব।', 'আপনি সম্ভাব্য বিপদ সম্পর্কে পূর্বানুমান  করার সুযোগ পাইবেন।', 'আপনার গাড়ির উপর নিয়ন্ত্রণ উন্নততর হইব', 'http://localhost:8080/belhasa/public/audio/LMV010-STEM-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-A-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-B-BEN.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-C-BEN.mp3'),
(3255, 467, '9', '在你驾驶的时候，为什么仔细查看路面至关重要？', 'LMV010-STEM-CHN.mp4', 'LMV010-A-CHN.mp4', 'LMV010-B-CHN.mp4', 'http://localhost:8080/belhasa/public/audio/LMV010-STEM-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-A-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-B-CHS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-C-CHS.mp3'),
(3256, 467, '10', 'Почему важно следить за\r\nситуацией на дороге во\r\nвремя вождения?', 'Это поможет вам\r\nбодрствовать.', 'Так легче заметить\r\nпотенциальную\r\nопасность.', 'Это улучшит ваше\r\nвладение машиной.', 'http://localhost:8080/belhasa/public/audio/LMV010-STEM-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-A-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-B-RUS.mp3', 'http://localhost:8080/belhasa/public/audio/LMV010-C-RUS.mp3'),
(3257, 467, '5', 'गाडी चलाते समय सड़क को हर तरफ से भली भांति देख लेना क्यों महत्वपूर्ण है ?', 'यह आपको जागे रहने में मदद करता है', 'सम्भव है आप आने वाले खतरों का बेहतर पूर्वानुमान लगा सकें', 'आप अचछा वाहन नियंत्रण विकासित करेंगे', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `id` char(40) NOT NULL,
  `expire` int(11) DEFAULT NULL,
  `data` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `expire`, `data`) VALUES
('9rmcso2cbarj2lo3i8ghekne4g', 1580286157, 0x5f5f666c6173687c613a303a7b7d5f5f69647c693a31383b),
('g8v23d1g5daub43k9niqrmge62', 1582981126, 0x5f5f666c6173687c613a303a7b7d5f5f69647c693a34323935353b),
('p6bnrh3mqj2pgmm53m20s468nj', 1582542957, 0x5f5f666c6173687c613a303a7b7d5f5f69647c693a34323935353b),
('vs4cku6e275v3rkrpp5nqfqffb', 1582498880, 0x5f5f666c6173687c613a303a7b7d5f5f69647c693a31383b);

-- --------------------------------------------------------

--
-- Table structure for table `testconfig`
--

CREATE TABLE `testconfig` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `testcategory` text DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  `noofquestion` int(10) NOT NULL DEFAULT 0,
  `reqnoofanswer` int(10) NOT NULL DEFAULT 0,
  `noofspecificquestion` int(10) NOT NULL DEFAULT 0,
  `noofcommonquestion` int(10) NOT NULL DEFAULT 0,
  `noofreqspecificanswer` int(10) NOT NULL DEFAULT 0,
  `noofreqcommonanswer` int(10) NOT NULL DEFAULT 0,
  `duration` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testconfig`
--

INSERT INTO `testconfig` (`id`, `name`, `testcategory`, `category`, `noofquestion`, `reqnoofanswer`, `noofspecificquestion`, `noofcommonquestion`, `noofreqspecificanswer`, `noofreqcommonanswer`, `duration`) VALUES
(28, 'Realtime Question', '32', 'realtime', 20, 16, 10, 10, 8, 8, 10),
(29, 'Common Question', '32', 'common', 20, 0, 10, 10, 0, 0, 2),
(30, 'Specific Question', '32', 'specific', 20, 0, 10, 10, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `testquestions`
--

CREATE TABLE `testquestions` (
  `id` int(10) NOT NULL,
  `testid` int(10) NOT NULL,
  `questionid` int(10) NOT NULL,
  `input` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testquestions`
--

INSERT INTO `testquestions` (`id`, `testid`, `questionid`, `input`, `status`, `created_at`, `updated_at`) VALUES
(12, 4, 361, '1', 0, '2020-11-08 07:19:19', '2020-11-08 07:19:19'),
(13, 4, 352, '1', 0, '2020-11-08 07:19:19', '2020-11-08 07:19:19'),
(14, 4, 341, '1', 0, '2020-11-08 07:19:19', '2020-11-08 07:19:19'),
(15, 4, 362, '1', 0, '2020-11-08 07:19:19', '2020-11-08 07:19:19'),
(16, 4, 343, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(17, 4, 351, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(18, 4, 348, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(19, 4, 350, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(20, 4, 345, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(21, 4, 354, '1', 0, '2020-11-08 07:19:20', '2020-11-08 07:19:20'),
(22, 5, 384, '1', 0, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(23, 5, 369, '1', 0, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(24, 5, 364, '1', 1, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(25, 5, 383, '1', 0, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(26, 5, 379, '1', 1, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(27, 5, 376, '1', 1, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(28, 5, 374, '1', 0, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(29, 5, 365, '1', 1, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(30, 5, 381, '1', 0, '2020-11-08 07:35:08', '2020-11-08 07:35:08'),
(31, 6, 373, '1', 1, '2020-11-19 13:30:24', '2020-11-19 13:30:24'),
(32, 6, 381, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(33, 6, 372, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(34, 6, 382, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(35, 6, 386, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(36, 6, 376, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(37, 6, 367, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(38, 6, 375, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(39, 6, 368, '1', 1, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(40, 6, 387, '1', 0, '2020-11-19 13:30:25', '2020-11-19 13:30:25'),
(41, 7, 375, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(42, 7, 364, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(43, 7, 383, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(44, 7, 370, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(45, 7, 385, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(46, 7, 389, '1', 0, '2020-11-20 04:15:43', '2020-11-20 04:15:43'),
(47, 7, 381, '1', 0, '2020-11-20 04:15:44', '2020-11-20 04:15:44'),
(48, 7, 378, '1', 0, '2020-11-20 04:15:44', '2020-11-20 04:15:44'),
(49, 7, 388, '1', 0, '2020-11-20 04:15:44', '2020-11-20 04:15:44'),
(50, 8, 365, '1', 0, '2020-11-21 09:13:30', '2020-11-21 09:13:30'),
(51, 8, 364, '1', 0, '2020-11-21 09:13:30', '2020-11-21 09:13:30'),
(52, 8, 381, '1', 0, '2020-11-21 09:13:30', '2020-11-21 09:13:30'),
(53, 8, 386, '1', 0, '2020-11-21 09:13:30', '2020-11-21 09:13:30'),
(54, 8, 387, '1', 0, '2020-11-21 09:13:30', '2020-11-21 09:13:30'),
(55, 8, 383, '1', 0, '2020-11-21 09:13:31', '2020-11-21 09:13:31'),
(56, 8, 377, '1', 0, '2020-11-21 09:13:31', '2020-11-21 09:13:31'),
(57, 8, 378, '1', 0, '2020-11-21 09:13:31', '2020-11-21 09:13:31'),
(58, 8, 368, '1', 0, '2020-11-21 09:13:31', '2020-11-21 09:13:31'),
(59, 8, 373, '1', 0, '2020-11-21 09:13:31', '2020-11-21 09:13:31'),
(60, 9, 461, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(61, 9, 462, '1', 1, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(62, 9, 446, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(63, 9, 447, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(64, 9, 455, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(65, 9, 442, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(66, 9, 465, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(67, 9, 451, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(68, 9, 459, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(69, 9, 444, '1', 0, '2020-11-30 08:39:03', '2020-11-30 08:39:03'),
(70, 10, 446, '1', 1, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(71, 10, 463, '1', 0, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(72, 10, 449, '1', 1, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(73, 10, 453, '1', 1, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(74, 10, 457, '1', 0, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(75, 10, 454, '1', 0, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(76, 10, 467, '1', 1, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(77, 10, 461, '1', 0, '2020-12-08 06:27:26', '2020-12-08 06:27:26'),
(78, 10, 448, '1', 0, '2020-12-08 06:27:27', '2020-12-08 06:27:27'),
(79, 10, 460, '1', 0, '2020-12-08 06:27:27', '2020-12-08 06:27:27'),
(80, 11, 450, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(81, 11, 443, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(82, 11, 464, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(83, 11, 460, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(84, 11, 448, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(85, 11, 457, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(86, 11, 458, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(87, 11, 453, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(88, 11, 452, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(89, 11, 466, '1', 0, '2020-12-09 08:51:22', '2020-12-09 08:51:22'),
(90, 12, 456, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(91, 12, 451, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(92, 12, 467, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(93, 12, 449, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(94, 12, 453, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(95, 12, 461, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(96, 12, 442, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(97, 12, 452, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(98, 12, 458, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(99, 12, 443, '1', 0, '2020-12-09 08:56:37', '2020-12-09 08:56:37'),
(100, 13, 450, '1', 0, '2020-12-12 02:34:31', '2020-12-12 02:34:31'),
(101, 13, 442, '1', 0, '2020-12-12 02:34:31', '2020-12-12 02:34:31'),
(102, 13, 467, '1', 0, '2020-12-12 02:34:31', '2020-12-12 02:34:31'),
(103, 13, 454, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(104, 13, 463, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(105, 13, 464, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(106, 13, 462, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(107, 13, 446, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(108, 13, 458, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(109, 13, 465, '1', 0, '2020-12-12 02:34:32', '2020-12-12 02:34:32'),
(110, 14, 460, '1', 1, '2020-12-13 04:17:00', '2020-12-13 04:17:00'),
(111, 14, 443, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(112, 14, 447, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(113, 14, 442, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(114, 14, 453, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(115, 14, 455, '1', 1, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(116, 14, 465, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(117, 14, 464, '1', 1, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(118, 14, 466, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(119, 14, 445, '1', 0, '2020-12-13 04:17:01', '2020-12-13 04:17:01'),
(120, 15, 463, '1', 1, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(121, 15, 454, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(122, 15, 448, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(123, 15, 457, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(124, 15, 452, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(125, 15, 459, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(126, 15, 461, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(127, 15, 453, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(128, 15, 442, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(129, 15, 456, '1', 0, '2020-12-13 04:24:38', '2020-12-13 04:24:38'),
(130, 16, 446, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(131, 16, 457, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(132, 16, 463, '1', 1, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(133, 16, 458, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(134, 16, 442, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(135, 16, 445, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(136, 16, 462, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(137, 16, 448, '1', 0, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(138, 16, 459, '1', 1, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(139, 16, 466, '1', 1, '2020-12-13 04:27:17', '2020-12-13 04:27:17'),
(140, 17, 455, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(141, 17, 461, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(142, 17, 445, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(143, 17, 446, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(144, 17, 450, '1', 1, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(145, 17, 465, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(146, 17, 447, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(147, 17, 457, '1', 1, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(148, 17, 456, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(149, 17, 453, '1', 0, '2020-12-13 04:37:55', '2020-12-13 04:37:55'),
(150, 18, 459, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(151, 18, 452, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(152, 18, 453, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(153, 18, 463, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(154, 18, 447, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(155, 18, 454, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(156, 18, 450, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(157, 18, 442, '1', 0, '2020-12-14 05:05:43', '2020-12-14 05:05:43'),
(158, 18, 446, '1', 1, '2020-12-14 05:05:44', '2020-12-14 05:05:44'),
(159, 18, 460, '1', 0, '2020-12-14 05:05:44', '2020-12-14 05:05:44'),
(160, 19, 455, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(161, 19, 465, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(162, 19, 462, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(163, 19, 463, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(164, 19, 454, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(165, 19, 467, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(166, 19, 457, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(167, 19, 456, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(168, 19, 458, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(169, 19, 461, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(170, 19, 446, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(171, 19, 466, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(172, 19, 444, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(173, 19, 453, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(174, 19, 443, '1', 0, '2020-12-31 07:26:14', '2020-12-31 07:26:14'),
(175, 20, 457, '1', 0, '2021-01-11 10:09:26', '2021-01-11 10:09:26'),
(176, 20, 454, '1', 1, '2021-01-11 10:09:26', '2021-01-11 10:09:26'),
(177, 20, 467, '1', 1, '2021-01-11 10:09:26', '2021-01-11 10:09:26'),
(178, 20, 460, '1', 0, '2021-01-11 10:09:26', '2021-01-11 10:09:26'),
(179, 20, 465, '1', 0, '2021-01-11 10:09:26', '2021-01-11 10:09:26'),
(180, 20, 464, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(181, 20, 455, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(182, 20, 459, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(183, 20, 458, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(184, 20, 466, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(185, 20, 444, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(186, 20, 442, '1', 0, '2021-01-11 10:09:27', '2021-01-11 10:09:27'),
(187, 20, 448, '1', 0, '2021-01-11 10:09:28', '2021-01-11 10:09:28'),
(188, 20, 453, '1', 0, '2021-01-11 10:09:28', '2021-01-11 10:09:28'),
(189, 21, 459, '1', 0, '2021-01-11 10:11:09', '2021-01-11 10:11:09'),
(190, 21, 460, '1', 0, '2021-01-11 10:11:09', '2021-01-11 10:11:09'),
(191, 21, 458, '1', 0, '2021-01-11 10:11:09', '2021-01-11 10:11:09'),
(192, 21, 454, '1', 0, '2021-01-11 10:11:09', '2021-01-11 10:11:09'),
(193, 21, 465, '1', 0, '2021-01-11 10:11:09', '2021-01-11 10:11:09'),
(194, 21, 464, '1', 1, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(195, 21, 461, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(196, 21, 455, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(197, 21, 463, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(198, 21, 457, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(199, 21, 453, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(200, 21, 456, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(201, 21, 467, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(202, 21, 443, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(203, 21, 447, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(204, 21, 462, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(205, 21, 450, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10'),
(206, 21, 466, '1', 0, '2021-01-11 10:11:10', '2021-01-11 10:11:10');

-- --------------------------------------------------------

--
-- Table structure for table `testresults`
--

CREATE TABLE `testresults` (
  `id` int(10) NOT NULL,
  `studentid` int(10) NOT NULL,
  `adminid` int(10) NOT NULL,
  `category` varchar(100) NOT NULL,
  `testdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `test_time` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testresults`
--

INSERT INTO `testresults` (`id`, `studentid`, `adminid`, `category`, `testdate`, `test_time`, `duration`) VALUES
(4, 43047, 43046, '32', '2020-11-08 12:19:19', NULL, NULL),
(5, 43047, 43046, '32', '2020-11-08 12:35:08', NULL, NULL),
(6, 43047, 1, '32', '2020-11-19 18:30:24', NULL, NULL),
(7, 43047, 43046, '32', '2020-11-20 09:15:43', NULL, NULL),
(8, 43047, 1, '32', '2020-11-21 14:13:30', NULL, NULL),
(9, 43047, 43046, '32', '2020-11-30 13:39:03', NULL, NULL),
(10, 43047, 1, '32', '2020-12-08 11:27:26', NULL, NULL),
(11, 43047, 1, '32', '2020-12-09 13:51:22', NULL, NULL),
(12, 43047, 43046, '32', '2020-12-09 13:56:37', NULL, NULL),
(13, 43047, 1, '32', '2020-12-12 07:34:31', NULL, NULL),
(14, 43047, 43046, '32', '2020-12-13 09:17:00', 55, 10),
(15, 43047, 1, '32', '2020-12-13 09:24:38', 17, 10),
(16, 43047, 43046, '32', '2020-12-13 09:27:17', 25, 10),
(17, 43047, 43046, '32', '2020-12-13 09:37:55', 77, 10),
(18, 43047, 43046, '32', '2020-12-14 10:05:43', 44, 10),
(19, 43047, 1, '32', '2020-12-31 12:26:14', 10, 10),
(20, 43047, 43046, '32', '2021-01-11 15:09:26', 17, 10),
(21, 43047, 43046, '32', '2021-01-11 15:11:09', 60, 10);

-- --------------------------------------------------------

--
-- Table structure for table `topicarea`
--

CREATE TABLE `topicarea` (
  `id` int(10) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  `name_ta` text CHARACTER SET utf8 NOT NULL,
  `name_ar` text CHARACTER SET utf8 NOT NULL,
  `name_ur` text CHARACTER SET utf8 NOT NULL,
  `name_hi` text CHARACTER SET utf8 NOT NULL,
  `name_be` text CHARACTER SET utf8 NOT NULL,
  `name_ma` text CHARACTER SET utf8 NOT NULL,
  `name_fa` text CHARACTER SET utf8 NOT NULL,
  `name_ch` text CHARACTER SET utf8 NOT NULL,
  `name_ru` text CHARACTER SET utf8 NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topicarea`
--

INSERT INTO `topicarea` (`id`, `name`, `name_ta`, `name_ar`, `name_ur`, `name_hi`, `name_be`, `name_ma`, `name_fa`, `name_ch`, `name_ru`, `status`) VALUES
(10, 'Road user information', 'இரு சக்கர', '', 'سڑک استعمال کرنے والوں کے لۓ معلومات', '', 'দুই চাকার', 'ഇരുചക്ര', 'دو چرخ', '两轮车', 'Два Уилер', 1),
(11, 'Traffic Signs', '', '', 'ٹريفک اشارے', '', '', '', '', '', '', 1),
(12, 'Traffic Laws', '', '', 'ٹريفک قوانين', '', '', '', '', '', '', 1),
(13, 'Fog', '', '', 'دھند', '', '', '', '', '', '', 1),
(14, 'Flood', '', '', 'سيلاب', '', '', '', '', '', '', 1),
(15, 'Mobile phone', '', '', 'موبائل', '', '', '', '', '', '', 1),
(16, 'Unacceptable driving behavior', '', '', 'ناقابل برداشت رويے', '', '', '', '', '', '', 1),
(18, 'Role Model Behavior\r\n', '', '', 'رویہ کا مثالی نمونہ', '', '', '', '', '', '', 1),
(19, 'Learning to drive', '', '', 'کاڑی چلانا سيکھنا', '', '', '', '', '', '', 1),
(24, 'Managing risk', '', '', 'خطرات سے نمٹنا', '', '', '', '', '', '', 1),
(27, 'Road user safety', '', '', 'سڑک استعمال کرنے والوں کی سلامتی', '', '', '', '', '', '', 1),
(30, 'Rules and responsibilities', '', '', 'قوانين اور ذمہ داریاں', '', '', '', '', '', '', 1),
(34, 'Beware of Hazards', '', '', 'خطروں سے ہوشيار رہيں', '', '', '', '', '', '', 1),
(35, 'What to wear', '', '', 'کيا پہننا مناسب ہے', '', '', '', '', '', '', 1),
(36, 'Starting out', '', '', 'ابتداء کرنا', '', '', '', '', '', '', 1),
(37, 'Look a head and Be seen', '', '', 'سامنے ديکھنا اور دوسروں کو نظر آنا', '', '', '', '', '', '', 1),
(38, 'Start away from Danger', '', '', 'خطروں سے دور رہيں', '', '', '', '', '', '', 1),
(39, 'Keep a Grip', '', '', 'موٹرسائيکل کی سڑک پر گرفت', '', '', '', '', '', '', 1),
(40, 'Night Driving', '', '', 'رات کے وقت سواری کرنا', '', '', '', '', '', '', 1),
(41, 'Pillions Passangers', '', '', 'سواری بٹھانا اور سامان اٹھانا', '', '', '', '', '', '', 1),
(42, 'Look After Your Bike', '', '', 'اپنے موٹر سائيکل کی ديکھ بھال کرنا', '', '', '', '', '', '', 1),
(43, 'Emergencies', '', '', 'ہنگامی حالات', '', '', '', '', '', '', 1),
(44, 'Categories of Truck and Bus Driver Licenses', '', '', 'ٹرک اور بس ڈرائيورلائسنس', '', '', '', '', '', '', 1),
(45, 'Sharing the Road with Others and Speed Management', '', '', '', '', '', '', '', '', '', 1),
(46, 'Driver Health & Safety', '', '', 'ڈرائيور کی صحت اور سلامتی', '', '', '', '', '', '', 1),
(47, 'Vehicle Checks', '', '', 'گاڑی کا معائنہ کرنا', '', '', '', '', '', '', 1),
(48, 'Planning and Observing while Driving', '', '', 'گاڑی چلاتے وقت تياری کرنا اور مشاہدہ کرنا', '', '', '', '', '', '', 1),
(49, 'Vehicle Emergencies', '', '', 'ہنگامی حالات', '', '', '', '', '', '', 1),
(50, 'Dimensions and Load Limits', '', '', 'سامان کا حجم اور وزن کی حد', '', '', '', '', '', '', 1),
(51, 'Coupling & Uncoupling Trailers', '', '', 'ٹريلر کو جوڑنا', '', '', '', '', '', '', 1),
(52, 'Driving A bus', '', '', 'بس چلانا', '', '', '', '', '', '', 1),
(53, 'Vehicle Control', '', '', 'گاڑی کو قابو رکھنا', '', '', '', '', '', '', 1),
(54, 'Sharing the Road with Others and Speed Management', '', '', 'دوسروں کے سا تھ مل کرسڑک استعمال کرنا اور درست رفتار اختيار کرنا', '', '', '', '', '', '', 1),
(55, 'Vehicle Emergencies', '', '', 'ہنگامی حالات', '', '', '', '', '', '', 1),
(56, 'Crashes', '', '', 'حادثات', '', '', '', '', '', '', 1),
(57, 'The  Laws', '', '', 'قوانين', '', '', '', '', '', '', 1),
(59, 'LMV', '', '', '', '', '', '', '', '', '', 1),
(61, 'test topic', '', 'test topic arabic', '', '', '', '', '', '', '', 1),
(62, 'test topic english', '', 'test topic arabic', '', '', '', '', '', '', '', 1),
(64, 'Motorcycle specific', '', '', '', '', '', '', '', '', '', 1),
(65, 'HVT  Specific', '', '', '', '', '', '', '', '', '', 1),
(66, 'Instructor', '', 'المربي', 'معلم', 'अध्यापक', '', '', '', '', '', 1),
(67, 'HVB Specific', '', '', '', '', '', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `studentId` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `resume_test` int(2) DEFAULT NULL,
  `time` time DEFAULT NULL,
  `test` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `photo` text DEFAULT NULL,
  `gender` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `nationality` varchar(75) CHARACTER SET utf8 DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `maritalStatus` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `confirmPassword` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `passport` text CHARACTER SET utf8 DEFAULT NULL,
  `emirates` text CHARACTER SET utf8 DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT 0,
  `language` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `show_instruction` tinyint(1) NOT NULL DEFAULT 0,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `studentId`, `name`, `email`, `isAdmin`, `resume_test`, `time`, `test`, `photo`, `gender`, `nationality`, `dob`, `age`, `maritalStatus`, `password`, `confirmPassword`, `passport`, `emirates`, `status`, `language`, `show_instruction`, `category`) VALUES
(42943, '6200000640', 'seif salem ', '', 0, 0, '00:00:00', '', '', 'Male', '', '2001-04-15', 18, '', '', '', '', '', 1, '', 0, '1'),
(42944, '6200000681', 'sudeesh kumar ', '', 0, 0, '00:00:00', '', '', 'Male', '', '1982-02-18', 37, '', '', '', '', '', 1, '', 0, '1'),
(42945, '6200000662', 'RANIN HONAIDI ', '', 0, 0, '00:00:00', '', '', 'Female', '', '1994-01-01', 26, '', '', '', '', '', 1, '', 0, '1'),
(42946, '6200000683', 'gogul moothedath ', '', 0, 0, '00:00:00', '', '', 'Male', '', '1993-03-29', 26, '', '', '', '', '', 1, '', 0, '1'),
(42947, '6200000684', 'mahmoud salaheldin ', '', 0, 0, '00:00:00', '', '', 'Male', '', '1983-04-17', 36, '', '', '', '', '', 1, '', 0, '1'),
(42948, '6200000644', 'muhammed rishad ', '', 0, 0, '00:00:00', '', '', 'Male', '', '1995-09-20', 24, '', '', '', '', '', 1, '', 0, '1'),
(42949, '6200000730', 'Soud kherkhecha', '', 0, 0, '00:00:00', '', '', 'Female', '', '1981-05-03', 38, '', '', '', '', '', 1, '', 0, '1'),
(42950, '6200000733', 'Swati  joshi', '', 0, 0, '00:00:00', '', '', 'Female', '', '1979-10-01', 40, '', '', '', '', '', 1, '', 0, '1'),
(42951, '6200000732', 'Ksenia dovzhenko', '', 0, 0, '00:00:00', '', '', 'Female', '', '1990-03-01', 29, '', '', '', '', '', 1, '', 0, '1'),
(42952, '6200000730', 'Soud kherkhecha', '', 0, 0, '00:00:00', '', '', 'Female', '', '1981-05-03', 38, '', '', '', '', '', 1, '', 0, '1'),
(42953, '6200000733', 'Swati  joshi', '', 0, 0, '00:00:00', '', '', 'Female', '', '1979-10-01', 40, '', '', '', '', '', 1, '', 0, '1'),
(42954, '6200000732', 'Ksenia dovzhenko', '', 0, 0, '00:00:00', '', '', 'Female', '', '1990-03-01', 29, '', '', '', '', '', 1, '', 0, '1'),
(42955, '123456', 'Bai MaoLi', 'baimaoli9@gmail.com', 0, 0, '00:00:00', '', 'data:image/jpeg;base64,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', 'Male', 'Chinese', '2020-01-19', 0, 'Single', '7c4a8d09ca3762af61e59520943dc26494f8941b', '69c5fcebaa65b560eaf06c3fbeb481ae44b8d618', 'Just For Test', 'Just For Test', 1, 'en-en', 0, '0'),
(43026, 'piaocheng', 'cheng piao', 'pc61300811@gmail.com', 1, 0, '02:48:59', '', 'http://localhost/vuejs-laravel/public/images/profile/0b9af3f776f0382dfd41d359d8bd4134.png', 'Male', 'Chinese', '1994-08-11', 25, 'Single', '21237b54e72e2c553c268e269d770eac8812b16c', '21237b54e72e2c553c268e269d770eac8812b16c', 'Passport Id details...', 'Emirates id details...', 0, '', 0, '1'),
(43036, 'sdsd', 'tom', 'pcdddddds61300811@gmail.com', 0, 0, '19:19:41', '', 'http://localhost/vuejs-laravel/public/images/profile/avatar.png', 'Female', NULL, '1900-01-01', 0, 'Single', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'd', 'd', 1, '', 0, '1'),
(43037, 'testaccount', 'test account', 'testaccount@gmail.com', 0, 0, '05:33:42', '', 'http://localhost/vuejs-laravel/public/images/profile/e72fa8f2f85e8600671da3c5bbb07c4a.png', 'Female', 'www', '2020-05-31', 0, 'Single', '57c867a8f101474bf683215422ae632b69ab3ed8', '57c867a8f101474bf683215422ae632b69ab3ed8', 'qwe', 'qwe', 0, '', 0, '1'),
(43038, 'testpc', 'testpc testpc', 'testpc@gmail.com', 0, 0, '05:49:10', '', 'http://localhost/vuejs-laravel/public/images/profile/db0f7725e1c5100ceada07709a600373.png', 'Female', 'www', '2020-05-31', 0, 'Married', 'dc54055f388727f6344088a5bfad82865cc30fd1', 'dc54055f388727f6344088a5bfad82865cc30fd1', 'qwe', 'qwe', 1, '', 0, '1'),
(43040, 'angelfrank00811', 'Angel Frank', 'angelfrank00811@gmail.com', 0, 0, '22:30:00', '', 'http://localhost/vuejs-laravel/public/images/profile/691a17d6effb6459a3a08f8d14a57a8c.png', 'Female', 'Female', '2020-07-06', 0, 'Married', '21237b54e72e2c553c268e269d770eac8812b16c', '21237b54e72e2c553c268e269d770eac8812b16c', 'passport', 'emirate', 0, '', 0, '1'),
(43041, 'asdfasdfasdfasd', 'Good lucky', 'asdasdfasdff@sss.com', 1, 0, '00:55:05', '', 'http://localhost/vuejs-laravel/public/images/profile/4e3954f8512ee874bc3bf4bb528a8278.png', 'Female', NULL, NULL, 0, NULL, '21237b54e72e2c553c268e269d770eac8812b16c', '21237b54e72e2c553c268e269d770eac8812b16c', NULL, NULL, 0, '', 0, '1'),
(43045, 'test0821', 'test 08217', 'test0821@gmail.com', 1, 0, '16:16:21', '', 'http://localhost/vuejs-laravel/public/images/profile/34f0e1184e3f4dab7db5ef0f57dcd718.png', 'Male', NULL, NULL, 0, NULL, '21237b54e72e2c553c268e269d770eac8812b16c', '21237b54e72e2c553c268e269d770eac8812b16c', NULL, NULL, 0, '', 0, '1'),
(43046, 'khalil', 'khalil', 'khalilnjm@gmail.com', 1, 0, '13:56:50', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'A', 'Pakistani', '2020-10-01', 0, 'b', '8c6617dbddaf5ee6d4dd0a91108429ecf6018408', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '4356745643453432', '23423432421341234', 1, '', 0, '1'),
(43047, 'umar', 'umar', 'umar@email.com', 0, 0, '13:57:57', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'A', NULL, '1900-01-01', 0, 'a', '21237b54e72e2c553c268e269d770eac8812b16c', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, NULL, 1, '', 0, '1'),
(43048, 'usama', 'usama', 'user@email.com', 0, 0, '17:25:11', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'A', NULL, '1900-01-01', 0, 'a', '8c6617dbddaf5ee6d4dd0a91108429ecf6018408', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, NULL, 1, '', 0, '1'),
(43049, 'if i write here', 'student name 2', 'khalilnjm2@gmail.com', 1, 0, '08:15:17', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'A', NULL, NULL, 0, NULL, '8c6617dbddaf5ee6d4dd0a91108429ecf6018408', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, NULL, 0, '', 0, '1'),
(43050, 'usama2', 'usama2', 'user2@email.com', 0, 0, '18:30:39', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'B', NULL, '1900-01-01', 0, NULL, 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, NULL, 1, '', 0, '1'),
(43051, 'usama3', 'usama3', 'user3@email.com', 0, 0, '18:31:17', '', 'http://localhost:8080/belhasa/public/images/profile/avatar.png', 'B', NULL, '1900-01-01', 0, NULL, 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', NULL, NULL, 1, '', 0, '1');

-- --------------------------------------------------------

--
-- Table structure for table `usersession`
--

CREATE TABLE `usersession` (
  `id` int(11) NOT NULL,
  `sid` text NOT NULL,
  `name` text NOT NULL,
  `adminid` varchar(100) NOT NULL,
  `login_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usersession`
--

INSERT INTO `usersession` (`id`, `sid`, `name`, `adminid`, `login_time`) VALUES
(1, 'umar', 'khalil', '43046', '2020-10-08 06:34:59'),
(2, 'umar', 'khalil', '43046', '2020-10-08 06:36:02'),
(3, 'umar', 'khalil', '43046', '2020-10-13 18:05:25'),
(4, 'umar', 'khalil', '43046', '2020-10-13 19:01:29'),
(5, 'umar', 'khalil', '43046', '2020-10-13 19:03:16'),
(6, 'umar', 'khalil', '43046', '2020-10-13 19:07:59'),
(7, 'umar', 'khalil', '43046', '2020-10-13 19:09:43'),
(8, 'umar', 'khalil', '43046', '2020-10-14 08:43:34'),
(9, 'umar', 'khalil', '43046', '2020-10-14 09:47:34'),
(10, 'umar', 'khalil', '43046', '2020-10-16 19:53:18'),
(11, 'umar', 'khalil', '43046', '2020-10-18 18:47:56'),
(12, 'umar', 'khalil', '43046', '2020-10-19 06:06:55'),
(13, 'umar', 'khalil', '43046', '2020-10-19 08:48:21'),
(14, 'umar', 'khalil', '43046', '2020-11-08 12:16:19'),
(15, 'umar', 'khalil', '43046', '2020-11-08 12:18:42'),
(16, 'umar', 'khalil', '43046', '2020-11-08 12:21:14'),
(17, 'umar', 'khalil', '43046', '2020-11-08 12:32:21'),
(18, 'umar', 'khalil', '43046', '2020-11-08 12:35:30'),
(19, 'umar', 'khalil', '43046', '2020-11-19 13:13:18'),
(20, 'umar', 'khalil', '43046', '2020-11-19 16:01:48'),
(21, 'umar', 'khalil', '43046', '2020-11-19 18:30:51'),
(22, 'umar', 'khalil', '43046', '2020-11-19 19:02:05'),
(23, 'umar', 'khalil', '43046', '2020-11-20 09:12:41'),
(24, 'umar', 'khalil', '43046', '2020-11-20 09:15:16'),
(25, 'umar', 'khalil', '43046', '2020-11-20 09:15:57'),
(26, 'umar', 'khalil', '43046', '2020-11-20 09:15:57'),
(27, 'umar', 'khalil', '43046', '2020-11-20 09:15:57'),
(28, 'umar', 'khalil', '43046', '2020-11-20 09:24:31'),
(29, 'umar', 'khalil', '43046', '2020-11-20 09:39:06'),
(30, 'umar', 'khalil', '43046', '2020-11-21 11:21:18'),
(31, 'umar', 'khalil', '43046', '2020-11-21 12:45:19'),
(32, 'umar', 'khalil', '43046', '2020-11-21 13:29:44'),
(33, 'umar', 'khalil', '43046', '2020-11-21 13:34:39'),
(34, 'umar', 'khalil', '43046', '2020-11-21 13:59:00'),
(35, 'umar', 'khalil', '43046', '2020-11-21 14:05:31'),
(36, 'umar', 'khalil', '43046', '2020-11-23 07:47:28'),
(37, 'umar', 'khalil', '43046', '2020-11-23 07:50:13'),
(38, 'umar', 'khalil', '43046', '2020-11-23 11:10:17'),
(39, 'umar', 'khalil', '43046', '2020-11-23 12:53:09'),
(40, 'umar', 'khalil', '43046', '2020-11-27 09:26:15'),
(41, 'umar', 'khalil', '43046', '2020-11-27 09:40:49'),
(42, 'umar', 'khalil', '43046', '2020-11-27 09:42:54'),
(43, 'umar', 'khalil', '43046', '2020-11-27 10:25:32'),
(44, 'umar', 'khalil', '43046', '2020-11-27 10:28:18'),
(45, 'umar', 'khalil', '43046', '2020-11-27 10:30:42'),
(46, 'umar', 'khalil', '43046', '2020-11-27 14:16:28'),
(47, 'umar', 'khalil', '43046', '2020-11-27 14:21:21'),
(48, 'umar', 'khalil', '43046', '2020-11-27 15:07:48'),
(49, 'umar', 'khalil', '43046', '2020-11-27 15:09:21'),
(50, 'umar', 'khalil', '43046', '2020-11-27 15:11:00'),
(51, 'umar', 'khalil', '43046', '2020-11-27 15:16:57'),
(52, 'umar', 'khalil', '43046', '2020-11-27 15:54:34'),
(53, 'umar', 'khalil', '43046', '2020-11-27 16:09:16'),
(54, 'umar', 'khalil', '43046', '2020-11-27 16:12:40'),
(55, 'umar', 'khalil', '43046', '2020-11-27 16:30:02'),
(56, 'umar', 'khalil', '43046', '2020-11-30 13:36:13'),
(57, 'umar', 'khalil', '43046', '2020-11-30 13:41:10'),
(58, 'umar', 'khalil', '43046', '2020-12-08 07:06:48'),
(59, 'umar', 'khalil', '43046', '2020-12-08 11:23:24'),
(60, 'umar', 'khalil', '43046', '2020-12-08 12:38:28'),
(61, 'umar', 'khalil', '43046', '2020-12-09 13:21:41'),
(62, 'umar', 'khalil', '43046', '2020-12-09 13:44:30'),
(63, 'umar', 'khalil', '43046', '2020-12-09 13:54:47'),
(64, 'umar', 'khalil', '43046', '2020-12-09 13:56:07'),
(65, 'umar', 'khalil', '43046', '2020-12-12 07:30:17'),
(66, 'umar', 'khalil', '43046', '2020-12-12 07:31:46'),
(67, 'umar', 'khalil', '43046', '2020-12-13 09:12:48'),
(68, 'umar', 'khalil', '43046', '2020-12-13 09:15:55'),
(69, 'umar', 'khalil', '43046', '2020-12-13 09:18:03'),
(70, 'umar', 'khalil', '43046', '2020-12-13 09:19:46'),
(71, 'umar', 'khalil', '43046', '2020-12-13 09:26:42'),
(72, 'umar', 'khalil', '43046', '2020-12-13 09:27:39'),
(73, 'umar', 'khalil', '43046', '2020-12-13 09:36:26'),
(74, 'umar', 'khalil', '43046', '2020-12-13 09:38:20'),
(75, 'umar', 'khalil', '43046', '2020-12-13 09:39:42'),
(76, 'umar', 'khalil', '43046', '2020-12-13 09:40:54'),
(77, 'umar', 'khalil', '43046', '2020-12-13 09:45:39'),
(78, 'umar', 'khalil', '43046', '2020-12-13 10:14:08'),
(79, 'umar', 'khalil', '43046', '2020-12-13 11:01:20'),
(80, 'umar', 'khalil', '43046', '2020-12-13 11:04:37'),
(81, 'umar', 'khalil', '43046', '2020-12-13 11:06:44'),
(82, 'umar', 'khalil', '43046', '2020-12-13 11:39:42'),
(83, 'umar', 'khalil', '43046', '2020-12-13 11:42:43'),
(84, 'umar', 'khalil', '43046', '2020-12-13 11:43:15'),
(85, 'umar', 'khalil', '43046', '2020-12-13 11:50:29'),
(86, 'umar', 'khalil', '43046', '2020-12-13 11:51:19'),
(87, 'umar', 'khalil', '43046', '2020-12-13 11:52:12'),
(88, 'umar', 'khalil', '43046', '2020-12-13 11:57:18'),
(89, 'umar', 'khalil', '43046', '2020-12-13 12:01:22'),
(90, 'umar', 'khalil', '43046', '2020-12-14 07:33:58'),
(91, 'umar', 'khalil', '43046', '2020-12-14 09:32:46'),
(92, 'umar', 'khalil', '43046', '2020-12-14 09:51:56'),
(93, 'umar', 'khalil', '43046', '2020-12-14 10:01:07'),
(94, 'umar', 'khalil', '43046', '2020-12-14 10:04:11'),
(95, 'umar', 'khalil', '43046', '2020-12-14 10:15:02'),
(96, 'umar', 'khalil', '43046', '2020-12-14 10:36:15'),
(97, 'umar', 'khalil', '43046', '2020-12-14 10:37:12'),
(98, 'umar', 'khalil', '43046', '2020-12-30 10:41:28'),
(99, 'umar', 'khalil', '43046', '2020-12-30 10:46:27'),
(100, 'umar', 'khalil', '43046', '2020-12-30 13:33:31'),
(101, 'umar', 'khalil', '43046', '2020-12-30 13:48:53'),
(102, 'umar', 'khalil', '43046', '2020-12-30 13:54:53'),
(103, 'umar', 'khalil', '43046', '2020-12-30 13:55:24'),
(104, 'umar', 'khalil', '43046', '2020-12-30 14:01:56'),
(105, 'umar', 'khalil', '43046', '2020-12-31 12:21:47'),
(106, 'umar', 'khalil', '43046', '2020-12-31 12:23:39'),
(107, 'umar', 'khalil', '43046', '2020-12-31 12:24:06'),
(108, 'umar', 'khalil', '43046', '2020-12-31 12:41:03'),
(109, 'umar', 'khalil', '43046', '2020-12-31 12:52:29'),
(110, 'umar', 'khalil', '43046', '2020-12-31 13:04:01'),
(111, 'umar', 'khalil', '43046', '2021-01-05 14:31:48'),
(112, 'umar', 'khalil', '43046', '2021-01-08 18:13:32'),
(113, 'umar', 'khalil', '43046', '2021-01-08 18:27:15'),
(114, 'umar', 'khalil', '43046', '2021-01-08 18:31:36'),
(115, 'umar', 'khalil', '43046', '2021-01-10 18:16:32'),
(116, 'umar', 'khalil', '43046', '2021-01-11 15:08:56'),
(117, 'umar', 'khalil', '43046', '2021-01-11 15:09:57'),
(118, 'umar', 'khalil', '43046', '2021-01-11 15:12:04'),
(119, 'umar', 'khalil', '43046', '2021-01-14 19:46:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questionstate`
--
ALTER TABLE `questionstate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions_translations`
--
ALTER TABLE `questions_translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testconfig`
--
ALTER TABLE `testconfig`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testquestions`
--
ALTER TABLE `testquestions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testresults`
--
ALTER TABLE `testresults`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topicarea`
--
ALTER TABLE `topicarea`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersession`
--
ALTER TABLE `usersession`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=468;

--
-- AUTO_INCREMENT for table `questionstate`
--
ALTER TABLE `questionstate`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions_translations`
--
ALTER TABLE `questions_translations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3258;

--
-- AUTO_INCREMENT for table `testconfig`
--
ALTER TABLE `testconfig`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `testquestions`
--
ALTER TABLE `testquestions`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT for table `testresults`
--
ALTER TABLE `testresults`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `topicarea`
--
ALTER TABLE `topicarea`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43052;

--
-- AUTO_INCREMENT for table `usersession`
--
ALTER TABLE `usersession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
