import type { Character } from '@/types/character';

export const characters: Character[] = [
  {
    id: 'ox_bellows',
    name: 'Ox Bellows',
    accent: 'red',
    age: 23,
    height: "6'4'",
    weight: '228 lbs.',
    hobbies: 'Football, Shiny Objects',
    birthday: 'October 18th',
    description:
      'Ox Bellows was always aa big kid. Never got beaten up. Always did the beating up ... but only when he had to do it. (Well, except for that one time.) Ox doesn’t like to think about that, but the blood and screams creep into his dreams on cold, lonely nights. Ox has known Jenny since they were kids growing up on Mulberry lane. He met Professor Longfellow at Greenwich University. Ox has known Father Rhinehardt all his life. He’s been confessing his sins to the priest since he was small (except for that one sin he doesn’t like to talk about). His greatest fear is of the dark.',
    traits: {
      speed: {
        values: [0, 2, 2, 2, 3, 4, 5, 5, 6],
        hp: 5,
      },
      might: {
        values: [0, 4, 5, 5, 6, 6, 7, 8, 8],
        hp: 3,
      },
      sanity: {
        values: [0, 2, 2, 3, 4, 5, 5, 6, 7],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 2, 3, 3, 5, 5, 6, 6],
        hp: 3,
      },
    },
  },
  {
    id: 'darrin_flash_williams',
    name: "Darrin 'Flash' Williams",
    accent: 'red',
    age: 20,
    height: "5'11'",
    weight: '188 lbs.',
    hobbies: 'Track, Music, Shakespearean Literature',
    birthday: 'June 6th',
    description:
      'Flash isn’t the most original name ever for someone as fast as Darrin. But he likes it. It’s comfortable and it fits him, just like his favorite pair of track shoes. Darrin lives to run, and runs to live. When he’s not running, Darrin feels like there’s something coming for him ... something Not Good. Even when he runs, the wind sometimes whispers in his ears, and he swears he can hear the Not Good Thing coming up behind him—fast. No wonder he’s the star of the track team. <br/><br/> Flash knows Jenny from the neighborhood. She’s okay, but she’s real quiet. He’s known Madame Zostra for his entire life. After all, he’s her nephew. Zoe’s his little cousin, but he’s only met her a couple of times.<br/><br/> Darrin’s greatest fear is that he’s going to be caught by the Not Good Thing (whatever it is).',
    traits: {
      speed: {
        values: [0, 4, 4, 4, 5, 6, 7, 7, 8],
        hp: 5,
      },
      might: {
        values: [0, 2, 3, 3, 4, 5, 6, 6, 7],
        hp: 3,
      },
      sanity: {
        values: [0, 1, 2, 3, 4, 5, 5, 5, 7],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 3, 3, 4, 5, 5, 5, 7],
        hp: 3,
      },
    },
  },
  {
    id: 'peter_akimoto',
    name: 'Peter Akimoto',
    accent: 'green',
    age: 13,
    height: "4'11'",
    weight: '98 lbs.',
    hobbies: 'Bugs, Basketball',
    birthday: 'September 3rd',
    description:
      'Peter’s two favorite places in the world are the basketball court and under his house. He likes the basketball court because that’s where he can play his favorite game. He likes being under the house because it’s a great place to hunt for bugs, plus it’s a good place to avoid his five older brothers. Sure, all older brothers pick on their younger siblings, but Peter’s brothers really pick on him. But what’s a few broken bones among family? Peter loves bugs and wants to be an entomologist when he grows up—an entomologist who never has to speak to his brothers.<br/><br/> Peter earns extra money taking care of Professor Longfellow’s yard (and finding cool bugs—bonus!). He knows Missy from school. She likes to do pretend medical exams on him and check out his real broken bones, but she doesn’t like it when he shows her his bug collection.<br/><br/> Peter’s greatest fear is that he’ll get trapped somewhereand never be able to escape.',
    traits: {
      speed: {
        values: [0, 3, 3, 3, 4, 6, 6, 7, 7],
        hp: 4,
      },
      might: {
        values: [0, 2, 3, 3, 4, 5, 5, 6, 8],
        hp: 3,
      },
      sanity: {
        values: [0, 3, 4, 4, 4, 5, 6, 6, 7],
        hp: 4,
      },
      knowledge: {
        values: [0, 3, 4, 4, 5, 6, 7, 7, 8],
        hp: 3,
      },
    },
  },
  {
    id: 'brandon_jaspers',
    name: 'Brandon Jaspers',
    accent: 'green',
    age: 12,
    height: "5'1'",
    weight: '109 lbs.',
    hobbies: 'Computers, Camping, Hockey',
    birthday: 'May 21st',
    description:
      'Brandon loves computers and camping. He takes his new laptop with him wherever he goes. That way he an program AND camp at the same time. Cool. Brandon’s never liked playing with regular toys, action figures, or that kind of thing. In fact, he hates puppets. He had a clown puppet when he was little, and some mornings when he woke up, he’d find it had moved closer to him. Brandon’s pretty sure his big brother, Chris, was messing with him. But he still hates puppets.<br/><br/> Brandon sometimes sees Zoe’s family when they go camping. Zoe usually hides in the tent with her dolls, though. Yuck. Brandon delivers the newspaper to Professor Longfellow (in his big old freaky house) and to Missy’s family.<br/><br/> Brandon’s greatest fear is of puppets, particularly clown puppets.',
    traits: {
      speed: {
        values: [0, 3, 4, 4, 4, 5, 6, 7, 8],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 3, 4, 5, 6, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 3, 3, 3, 4, 5, 6, 7, 8],
        hp: 4,
      },
      knowledge: {
        values: [0, 1, 3, 3, 5, 5, 6, 6, 7],
        hp: 3,
      },
    },
  },
  {
    id: 'jenny_leclerc',
    name: 'Jenny LeClerc',
    accent: 'purple',
    age: 21,
    height: "5'7'",
    weight: '142 lbs.',
    hobbies: 'Reading, Soccer',
    birthday: 'March 4th',
    description:
      'Jenny is a quiet girl. She loves soccer, but sometimes she’s too shy to cooperate with her teammates the way she should. Jenny’s greatest pleasure is curling up alone in a tiny place reading a gigantic book—the older the book, the better. The books keep her from dweling on her mother’s disappearance, that day fourteen years ago when Mom went to the store and never came back, leaving Jenny alone. Alone forever.<br/><br/> Jenny’s only real friend is Caitlyn, Heather’s older sister. Jenny also knows Ox, since she grew up only a few doors away from him on Mulberry Lane. And Jenny knows Madame Zostra from the library, a place they both adore. <br/><br/> Jenny’s greatest fear is being trapped in a crowd or lost out in the open.',
    traits: {
      speed: {
        values: [0, 2, 3, 4, 4, 4, 5, 6, 8],
        hp: 4,
      },
      might: {
        values: [0, 3, 4, 4, 4, 4, 5, 6, 8],
        hp: 3,
      },
      sanity: {
        values: [0, 1, 1, 2, 4, 4, 4, 5, 6],
        hp: 5,
      },
      knowledge: {
        values: [0, 2, 3, 3, 4, 4, 5, 6, 8],
        hp: 3,
      },
    },
  },
  {
    id: 'heather_granville',
    name: 'Heather Granville',
    accent: 'purple',
    age: 18,
    height: "5'2'",
    weight: '120 lbs.',
    hobbies: 'Television, Shopping',
    birthday: 'August 2nd',
    description:
      'Heather has always been perfect—perfectly petite, perfectly blonde, perfectly polite. Perfect, perfect, perfect. If even the teeniest, tiniest thing in her life isn’t perfect, it gives Heather a headache. Sometimes her headaches get so bad it feels like something is trying to dig its way out of her skull. But even that doesn’t wipe the perfect smile off her face.<br/><br/> Heather’s eldest sister is friends with Jenny—why, Heather doesn’t really know. After all, Jenny’s certainly NOT perfect. Heather knows Flash and Professor Longfellow from school. Vivian is a friend of her mother’s, has been for years.<br/><br/> Heather’s greatest fear is that she isn’t actually perfect after all.',
    traits: {
      speed: {
        values: [0, 3, 3, 4, 5, 6, 6, 7, 8],
        hp: 3,
      },
      might: {
        values: [0, 3, 3, 3, 4, 5, 6, 7, 8],
        hp: 3,
      },
      sanity: {
        values: [0, 3, 3, 3, 4, 5, 6, 6, 6],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 3, 3, 4, 5, 6, 7, 8],
        hp: 5,
      },
    },
  },
  {
    id: 'missy_dubourde',
    name: 'Missy Dubourde',
    accent: 'yellow',
    age: 9,
    height: "4'2'",
    weight: '62 lbs.',
    hobbies: 'Swimming, Medicine',
    birthday: 'February 14th',
    description:
      'Missy can’t remember wanting to be anything except for a doctor. Her favourite gift ever in the whole wide world was her first doctor’s kit. She practices ‘medicine’ on anyone who will let her. She even cuts up dead frogs and stuff she finds in her yard. But sometimes that gets bad, and she dreams of dead frogs hip-hopping into her bed at night and smothering her. Then she screams.<br/><br/> Missy knows Peter (and his gross bug collection) from school. She knows Father Rhinehardt from Sunday school (he talks funny and smells like chocolate). Missy lives in the same neighbourhood as Brandon. He delivers her family’s paper, but she doesn’t really know him. (She thinks he’s cute, though.)<br/><br/> Missy’s greatest fear is of dead things coming back to life and hunting her.',
    traits: {
      speed: {
        values: [0, 3, 4, 5, 6, 6, 6, 7, 7],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 3, 3, 4, 5, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 1, 2, 3, 4, 5, 5, 6, 7],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 3, 4, 4, 5, 6, 6, 6],
        hp: 4,
      },
    },
  },
  {
    id: 'zoe_ingstrom',
    name: 'Zoe Ingstrom',
    accent: 'yellow',
    age: 8,
    height: "3'9'",
    weight: '49 lbs.',
    hobbies: 'Dolls, Music',
    birthday: 'November 5th',
    description:
      'Zoe likes to play in her room with her dolls. Each doll has its own name, family, history, pets, and everything else a doll needs to be happy. Zoe helps her dolls play out little dramas, mostly happy ones, but sometimes the dolls get mad at each other and hit. Not that Daddies would ever hit Mommies. That doesn’t happen. Leastways, you’re not supposed to talk about it. So, Zoe plays with her dolls.<br/><br/> Flash is Zoe’s cousin, but she doesn’t know him real well. Zoe’s mom goes to Madame Zostra for tarot card readings. Zoe likes playing with her dolls under the table there. Zoe’s family sometimes goes camping with Brandon’s family. But Zoe doesn’t like it, so she mostly stays in the tent and plays with her dolls.<br/><br/> Zoe’s greatest fear is the boogeyman ... whoever he is.',
    traits: {
      speed: {
        values: [0, 4, 4, 4, 4, 5, 6, 8, 8],
        hp: 4,
      },
      might: {
        values: [0, 2, 2, 3, 3, 4, 4, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 3, 4, 5, 5, 6, 6, 7, 8],
        hp: 3,
      },
      knowledge: {
        values: [0, 1, 2, 3, 4, 4, 5, 5, 5],
        hp: 3,
      },
    },
  },
  {
    id: 'vivian_lopez',
    name: 'Vivian Lopez',
    accent: 'blue',
    age: 42,
    height: "5'5'",
    weight: '142 lbs.',
    hobbies: 'Old Movies, Horses',
    birthday: 'January 11th',
    description:
      'Vivian’s perfect day is to get up late, have coffee and doughnuts, and then ride one of her horses all day. Unfortunately, she doesn’t get to spend too many days like that, since she’s so busy trying to keep her little used book store from going under. Some days she gets so frustrated she just feels like burning the place down, or maybe just burning the little shed out back ... or the school. But she’d never do anything like that. Still, sometimes she has nightmares about striking the match ...<br/><br/>Vivian is a friend of Heather’s mother, Sarah. She also knows Madame Zostra and Father Rhinehardt as cutomers at her little book store, Something Written. For extra money, Vivian has been babysitting Missy Dubourde at least once a month for the past few years.<br/><br/> Vivian’s greatest fear is of fire ... and her fascination with it.',
    traits: {
      speed: {
        values: [0, 3, 4, 4, 4, 4, 6, 7, 8],
        hp: 4,
      },
      might: {
        values: [0, 2, 2, 2, 4, 4, 5, 6, 6],
        hp: 3,
      },
      sanity: {
        values: [0, 4, 4, 4, 5, 6, 7, 8, 8],
        hp: 3,
      },
      knowledge: {
        values: [0, 4, 5, 5, 5, 5, 6, 6, 7],
        hp: 4,
      },
    },
  },
  {
    id: 'madame_zostra',
    name: 'Madame Zostra',
    accent: 'blue',
    age: 37,
    height: "5'0'",
    weight: '150 lbs.',
    hobbies: 'Astrology, Cooking, Baseball',
    birthday: 'December 10th',
    description:
      'Madame Zostra, or ‘Belladina’ (as her mother name her), has been a tarot and tea leaf reader since college. She started out working part-time sitting in the window of an occult bookstore, but now she has her own home astrology business. Although Madame Zostra reads cards for a living, she won’t ever read her own cards. She is terrified that she’ll see her own death in the cards, something she can’t bear to think about.<br/><br/> Madame Zostra is familiar with Vivian and Father Rhinehardt from seeingg them at Vivian’s bookstore. Flash is her nephew, and she never fails to buy him birthday and Christmas gifts. She sees Jenny regularly at the library. Zoe’s mother comes to Madame Zostra for tarot readings.<br/><br/> Madame Zostra is terrified of death ... particularly her own.',
    traits: {
      speed: {
        values: [0, 2, 3, 3, 5, 5, 6, 6, 7],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 3, 4, 5, 5, 5, 6],
        hp: 4,
      },
      sanity: {
        values: [0, 4, 4, 4, 5, 6, 7, 8, 8],
        hp: 3,
      },
      knowledge: {
        values: [0, 1, 3, 4, 4, 4, 5, 6, 6],
        hp: 4,
      },
    },
  },
  {
    id: 'father_rhinehardt',
    name: 'Father Rhinehardt',
    accent: 'white',
    age: 62,
    height: "5'9'",
    weight: '185 lbs.',
    hobbies: 'Fencing, Gardening',
    birthday: 'April 29th',
    description:
      'Father Rhinehardt was born in Munchen, Germany (or Munich, as Americans call it). He moved with his family to America when he was 15 ... and then got beaten up for the next three years. Father Rhinehardt turned to religion for the reasons why people treated him so badly. Eventually, he entered Seminary and became a priest. Since that day, long ago, many people have confessed their sins to him. But there is one man who haunts him, every few years, a stranger who sits in the confessional and whispers of murder and madness. In recent years, Father Rhinehardt has found he’s starting to agree with the madman’s arguments. Blood, pain, death—they are all a part of life, of God’s plan, are they not?<br/><br/> Father Rhinehaardt is familiar with Vivian and Madame Zostra from seeing them aat the Something Written bookstore. He knows Ox from hearing him confess his petty sins. He also knows Missy from her appearances at Sunday school.<br/><br/> More than anything, Father Rhinehardt fears going mad.',
    traits: {
      speed: {
        values: [0, 2, 3, 3, 4, 5, 6, 7, 7],
        hp: 3,
      },
      might: {
        values: [0, 1, 2, 2, 4, 4, 5, 5, 7],
        hp: 3,
      },
      sanity: {
        values: [0, 3, 4, 5, 5, 6, 7, 7, 8],
        hp: 5,
      },
      knowledge: {
        values: [0, 1, 3, 3, 4, 5, 6, 6, 8],
        hp: 4,
      },
    },
  },
  {
    id: 'professor_longfellow',
    name: 'Professor Longfellow',
    accent: 'white',
    age: 57,
    height: "5'11'",
    weight: '153 lbs.',
    hobbies: 'Gaelic Music, Drama, Fine Wines',
    birthday: 'July 27th',
    description:
      'Professor Josiah Longfellow is very proud of his aristocratic roots. His family used to have money ... at least until his father lost it all on gambling and alcohol. The Professor lives with his aging in the rundown Victorian that used to be the house in town. His father disappeared one day. out. His mother has a rather large life insurance policy but of course, he doesn’t want to collect on it any soon, no matter how nice the money would be. <br /><br /> Professor Longfellow knows Ox, Flash, and  from the university. Brandon is his paperboy. mows the yard and takes care of other petty around the house. <br /><br /> The Professor’s greatest fear is that he will everything he has, proving to everyone that he’s better than his deadbeat father.',
    traits: {
      speed: {
        values: [0, 2, 2, 4, 4, 5, 5, 6, 6],
        hp: 4,
      },
      might: {
        values: [0, 1, 2, 3, 4, 5, 5, 6, 6],
        hp: 3,
      },
      sanity: {
        values: [0, 1, 3, 3, 4, 5, 5, 6, 7],
        hp: 3,
      },
      knowledge: {
        values: [0, 4, 5, 5, 5, 5, 6, 7, 8],
        hp: 5,
      },
    },
  },
];
