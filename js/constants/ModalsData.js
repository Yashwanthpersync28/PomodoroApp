export const modalData = {
    StrictMode:[
        {name:'Block All Notifications',id:'notifications'},
        {name:'Block Phone calls',id:'phone calls'},
        {name:'Block Other Apps',id:'apps'},
        {name:'Lock Phone',id:'phone'},
        {name:'Prohibit to Exit',id:'exit'}
    ],
    TimerMode:[
        {id:'hightoLow',start:'25:00',end:'00:00',desc:'Countdown from 25 Minutes until time turns out'},
        {id:'lowToHigh',start:'00:00',end:'∞',desc:'Start Counting from 0 until stopped manually'},
    ],
    whiteNoiseMode:[
        {id:'none',MusicName:'None',song:null},
        {id:'song1',MusicName:'Cafe Ambiance',song:require('../assets/songs/adventure.mp3')},
        {id:'song2',MusicName:'Shadow',       song:require('../../android/app/src/main/res/raw/shadow.mp3')},
        {id:'song3',MusicName:'White Noise 3',song:require('../../android/app/src/main/res/raw/adventure.mp3')},
        {id:'song4',MusicName:'White Noise 4',song:require('../../android/app/src/main/res/raw/shadow.mp3')},
        {id:'song5',MusicName:'White Noise 5',song:require('../../android/app/src/main/res/raw/adventure.mp3')},
        {id:'song6',MusicName:'White Noise 6',song:require('../../android/app/src/main/res/raw/shadow.mp3')},
        {id:'song7',MusicName:'White Noise 7',song:require('../../android/app/src/main/res/raw/adventure.mp3')},
        {id:'song8',MusicName:'White Noise 8',song:require('../../android/app/src/main/res/raw/shadow.mp3')},
    ]
 }