import type { Character } from '@/types/character';

export const Characters: Character[] = [
  {
    id: 'josef_hooper',
    name: 'Josef "Brosef" Hooper',
    accent: 'red',
    age: 25,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'poetry, football',
    birthday: 'February 25',
    description:
      'Josef often gets taken for a meathead college athlete, and he kind of is, but at the same time has a softer side when it comes to sticking up for people he cares about. He’s willing to face any danger for his friends, which is about to be put to the test. Josef has seen Michelle on the pitch and is impressed by her skills.',
    traits: {
      speed: {
        values: [0, 2, 2, 3, 4, 5, 6, 7, 8],
        hp: 4,
      },
      might: {
        values: [0, 4, 4, 4, 5, 6, 7, 8, 8],
        hp: 4,
      },
      sanity: {
        values: [0, 2, 3, 4, 4, 5, 5, 6, 6],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 2, 3, 3, 5, 5, 6, 6],
        hp: 3,
      },
    },
  },
  {
    id: 'oliver_swift',
    name: 'Oliver Swift',
    accent: 'red',
    age: 33,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'philosophy, running',
    birthday: 'July 3',
    description:
      'Oliver is fast, but he believes that you should never run unless you’re running away from something. A loner by nature, he studies philosophy to try to find the nature of humanity and understand why people are so insufferable. Dr. Dan has been treating Oliver’s anemia since he was a child.',
    traits: {
      speed: {
        values: [0, 3, 3, 4, 5, 5, 6, 7, 8],
        hp: 4,
      },
      might: {
        values: [0, 3, 3, 4, 4, 5, 6, 6, 7],
        hp: 3,
      },
      sanity: {
        values: [0, 2, 3, 3, 4, 5, 5, 6, 7],
        hp: 3,
      },
      knowledge: {
        values: [0, 3, 3, 3, 4, 5, 6, 6, 7],
        hp: 4,
      },
    },
  },
  {
    id: 'stephanie_richter',
    name: 'Stephanie Richter',
    accent: 'blue',
    age: 40,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'photography, cooking',
    birthday: 'January 12',
    description:
      'Stephanie has a knack for amateur filmmaking. She enjoys creating short documentaries that she uploads to the internet. A film about that haunted old house would do wonders for her online presence. Stephanie is Sammy’s neighbor. She filmed his first magic show at the elementary school talent night and has been friends with him ever since.',
    traits: {
      speed: {
        values: [0, 2, 3, 3, 5, 5, 6, 6, 7],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 3, 4, 5, 5, 6, 6],
        hp: 4,
      },
      sanity: {
        values: [0, 4, 4, 5, 5, 6, 7, 8, 8],
        hp: 4,
      },
      knowledge: {
        values: [0, 2, 3, 4, 4, 4, 5, 6, 6],
        hp: 3,
      },
    },
  },
  {
    id: 'persephone_puleri',
    name: 'Persephone Puleri',
    accent: 'blue',
    age: 49,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'camping, fragrances',
    birthday: 'April 15',
    description:
      'Persephone runs a local shop called Blessed Botanicals that specializes in all manner of crystals, herbs, and paranormal supplies. The rumors of a local haunted house have certainly been good for business, and she’s been eager to find an excuse to explore the place. Jaden sometimes comes into the shop asking about strange clues that he’s come across.',
    traits: {
      speed: {
        values: [0, 3, 3, 4, 4, 5, 6, 7, 8],
        hp: 4,
      },
      might: {
        values: [0, 3, 3, 4, 5, 6, 6, 7, 7],
        hp: 3,
      },
      sanity: {
        values: [0, 3, 3, 4, 5, 6, 7, 8, 8],
        hp: 4,
      },
      knowledge: {
        values: [0, 2, 3, 4, 5, 6, 6, 7, 7],
        hp: 3,
      },
    },
  },
  {
    id: 'sammy_angler',
    name: 'Sammy Angler',
    accent: 'green',
    age: 9,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'magic tricks, video games',
    birthday: 'September 18',
    description:
      'Sammy is a bright kid who has been obsessed with stage magicians since one came to his sixth birthday party. The next year he asked for a magic kit of his own, and his stage shows have gotten more elaborate ever since. Now he’s looking for even more elaborate stage dressing, and what could be more mystical than an old abandoned house. Oliver sometimes comes over on weekends to tutor Sammy in his least favorite subject, math.',
    traits: {
      speed: {
        values: [0, 2, 3, 4, 4, 5, 6, 7, 8],
        hp: 5,
      },
      might: {
        values: [0, 3, 3, 4, 4, 5, 5, 6, 8],
        hp: 3,
      },
      sanity: {
        values: [0, 2, 3, 4, 4, 5, 6, 6, 7],
        hp: 4,
      },
      knowledge: {
        values: [0, 2, 3, 3, 4, 5, 6, 7, 8],
        hp: 3,
      },
    },
  },
  {
    id: 'jaden_jones',
    name: 'Jaden Jones',
    accent: 'green',
    age: 11,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'mysteries, reading',
    birthday: 'October 4',
    description:
      'Jaden Jones works tirelessly to uncover the mysteries of the world, no matter how inconvenient that makes life for those around him. Armed with his “My First Detective” magnifying glass and evidence case, he’s going to explore this old house in search of... clues. And he’s documenting everything, for posterity. Jaden loves hanging around the old church, and often borrows detective comics from Father Leung.',
    traits: {
      speed: {
        values: [0, 3, 4, 4, 4, 5, 6, 7, 8],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 3, 3, 4, 5, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 3, 3, 4, 5, 5, 6, 7, 8],
        hp: 3,
      },
      knowledge: {
        values: [0, 3, 3, 4, 5, 5, 6, 6, 7],
        hp: 4,
      },
    },
  },
  {
    id: 'isa_valencia',
    name: 'Isa Valencia',
    accent: 'yellow',
    age: 11,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'depressing music, blogging',
    birthday: 'March 30',
    description:
      'Isa’s always been a bit off. A strange kid with an interest in the paranormal, she has a strong belief in the supernatural. She spends her night watching reruns of Bros vs. Ghosts on late night TV. Isa enjoys talking with Brittani about the darker side of electronic music, often borrowing CDs to have on in the background while she blogs.',
    traits: {
      speed: {
        values: [0, 4, 4, 5, 5, 6, 7, 8, 8],
        hp: 4,
      },
      might: {
        values: [0, 2, 3, 3, 3, 4, 5, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 2, 3, 4, 5, 6, 7, 7, 8],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 3, 4, 4, 5, 6, 6, 6],
        hp: 3,
      },
    },
  },
  {
    id: 'anita_hernandez',
    name: 'Anita Hernandez',
    accent: 'yellow',
    age: 12,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'taxidermy, painting',
    birthday: 'June 11',
    description:
      'Anita Hernandez was raised by parents who were extremely superstitious. She works in her parents’ tea shop in order to learn about all the magical qualities of different herbs. While she doesn’t really believe in all this nonsense, something about that old house on the hill gives her the creeps. Anita’s parents visit Persephone’s shop on weekends to stock up.',
    traits: {
      speed: {
        values: [0, 2, 3, 4, 4, 5, 6, 7, 8],
        hp: 3,
      },
      might: {
        values: [0, 2, 2, 3, 4, 4, 5, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 2, 2, 3, 4, 5, 5, 6, 6],
        hp: 3,
      },
      knowledge: {
        values: [0, 4, 4, 5, 5, 6, 7, 8, 8],
        hp: 4,
      },
    },
  },
  {
    id: 'warren_leng',
    name: 'Father Warren Leung',
    accent: 'white',
    age: 71,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'watercolors, comic books',
    birthday: 'November 17',
    description:
      'A no-nonsense priest with a backbone made of steel. He has an extensive knowledge of ancient religions, and a history of banishing a demon or two back in his day. He’s been trying to quit smoking for the last two years, so he’s a little cranky. Anita attends a weekly watercolor class at Warren’s church.',
    traits: {
      speed: {
        values: [0, 2, 3, 4, 4, 5, 5, 6, 6],
        hp: 4,
      },
      might: {
        values: [0, 2, 2, 3, 3, 4, 5, 6, 6],
        hp: 4,
      },
      sanity: {
        values: [0, 3, 3, 3, 4, 5, 6, 7, 8],
        hp: 5,
      },
      knowledge: {
        values: [0, 3, 3, 4, 5, 5, 6, 7, 8],
        hp: 3,
      },
    },
  },
  {
    id: 'dan_nguyen',
    name: 'Dan Nguyen, M.D.',
    accent: 'white',
    age: 60,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'fishing, documentaries',
    birthday: 'May 6',
    description:
      'Dan has been a doctor in this town for decades, always willing to help anyone who comes to his office. Lately he’s been seeing more and more injuries related to that creepy old house. Broken legs from falling through floorboards, bumps and bruises from “phantasms,” strange marks appearing the night after a visit. He’s come to the house to finally get to the bottom of all this nonsense. Dan sees Josef on a near-weekly basis for some injury or another.',
    traits: {
      speed: {
        values: [0, 2, 3, 3, 4, 5, 6, 7, 7],
        hp: 3,
      },
      might: {
        values: [0, 3, 3, 4, 4, 5, 5, 6, 7],
        hp: 4,
      },
      sanity: {
        values: [0, 2, 3, 4, 4, 5, 6, 7, 8],
        hp: 4,
      },
      knowledge: {
        values: [0, 3, 3, 4, 5, 5, 6, 7, 8],
        hp: 5,
      },
    },
  },
  {
    id: 'michelle_monroe',
    name: 'Michelle Monroe',
    accent: 'purple',
    age: 19,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'lacrosse, traveling',
    birthday: 'August 19',
    description:
      'Michelle is a lacrosse teen who’s faced worse than whatever this house throws at her. She’s used to being the underdog, but she has brought her team to victory before and she can do it again... even if the game is survival instead of lacrosse. Always a fan of a nice spot of tea, she often sees Isa in the tea shop while she is enjoying a steaming cup of Earl Grey.',
    traits: {
      speed: {
        values: [0, 3, 3, 4, 5, 6, 6, 7, 8],
        hp: 3,
      },
      might: {
        values: [0, 2, 3, 4, 4, 5, 6, 7, 8],
        hp: 5,
      },
      sanity: {
        values: [0, 2, 3, 3, 4, 5, 6, 6, 6],
        hp: 3,
      },
      knowledge: {
        values: [0, 2, 3, 3, 4, 5, 6, 7, 8],
        hp: 4,
      },
    },
  },
  {
    id: 'brittani_bowen',
    name: 'Brittani "Beat Box" Bowen',
    accent: 'purple',
    age: 22,
    height: 'n/a',
    weight: 'n/a',
    hobbies: 'dancing, gardening',
    birthday: 'December 1',
    description:
      'Brittani is a DJ who has been throwing impromptu house parties since high school. Brittani seeks new and exciting locations to play music, and what could be more interesting than an abandoned old house. Brittani will often bring extra tomatoes from her garden to Stephanie. She makes the best lasagna.',
    traits: {
      speed: {
        values: [0, 2, 3, 3, 4, 4, 5, 6, 6],
        hp: 3,
      },
      might: {
        values: [0, 3, 3, 4, 5, 6, 7, 7, 8],
        hp: 4,
      },
      sanity: {
        values: [0, 3, 3, 4, 4, 5, 6, 6, 7],
        hp: 4,
      },
      knowledge: {
        values: [0, 3, 3, 4, 5, 5, 6, 6, 7],
        hp: 3,
      },
    },
  },
];
