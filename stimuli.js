
// For intro video task
var video_array = [
    { video_stim: ['./stimuli/video_stim/flowers1.mp4']},
    { video_stim: ['./stimuli/video_stim/flowers2.mp4']},
    { video_stim: ['./stimuli/video_stim/flowers3.mp4']},
    { video_stim: ['./stimuli/video_stim/flowers4.mp4']},
    { video_stim: ['./stimuli/video_stim/flowers5.mp4']}
];

// Word stimuli for encoding task
var master_word_stim = [
    
{word: 'ANCHOR', list: 'A'},
{word: 'ATHLETE', list: 'A'},
{word: 'BISCUIT', list: 'A'},
{word: 'BUBBLE', list: 'A'},
{word: 'DOLPHIN', list: 'A'},
{word: 'ENZYME', list: 'A'},
{word: 'GERM', list: 'A'},
{word: 'GRAVE', list: 'A'},
{word: 'LUNAR', list: 'A'},
{word: 'MOLE', list: 'A'},
{word: 'MOUSTACHE', list: 'A'},
{word: 'PANTHER', list: 'A'},
{word: 'SKULL', list: 'A'},
{word: 'SLEEVE', list: 'A'},
{word: 'SNORKEL', list: 'A'},
{word: 'SPACE', list: 'A'},


{word: 'ANKLE', list: 'B'},
{word: 'ARTERY', list: 'B'},
{word: 'BLADDER', list: 'B'},
{word: 'CALF', list: 'B'},
{word: 'CIRCUIT', list: 'B'},
{word: 'FEAST', list: 'B'},
{word: 'GLACIER', list: 'B'},
{word: 'HARDWARE', list: 'B'},
{word: 'LATTICE', list: 'B'},
{word: 'OLIVE', list: 'B'},
{word: 'PARCEL', list: 'B'},
{word: 'SILK', list: 'B'},
{word: 'SLEDGE', list: 'B'},
{word: 'CANVAS', list: 'B'},
{word: 'STALLION', list: 'B'},
{word: 'THIGH', list: 'B'},

{word: 'ACROBAT', list: 'C'},
{word: 'AGENDA', list: 'C'},
{word: 'CONCRETE', list: 'C'},
{word: 'FLUTE', list: 'C'},
{word: 'FROST', list: 'C'},
{word: 'HOLLOW', list: 'C'},
{word: 'HORMONE', list: 'C'},
{word: 'MAGICIAN', list: 'C'},
{word: 'OYSTER', list: 'C'},
{word: 'POSTER', list: 'C'},
{word: 'PRAWN', list: 'C'},
{word: 'RODENT', list: 'C'},
{word: 'ROOSTER', list: 'C'},
{word: 'SAUCER', list: 'C'},
{word: 'SWORD', list: 'C'},
{word: 'TONGUE', list: 'C'},

{word: 'CAVE', list: 'D'},
{word: 'DUCK', list: 'D'},
{word: 'DWARF', list: 'D'},
{word: 'FILTER', list: 'D'},
{word: 'JEWEL', list: 'D'},
{word: 'KITTEN', list: 'D'},
{word: 'MOLECULE', list: 'D'},
{word: 'MONKEY', list: 'D'},
{word: 'MUSHROOM', list: 'D'},
{word: 'PANDA', list: 'D'},
{word: 'PODIUM', list: 'D'},
{word: 'POPE', list: 'D'},
{word: 'SOCKET', list: 'D'},
{word: 'SPATULA', list: 'D'},
{word: 'TATTOO', list: 'D'},
{word: 'WOMB', list: 'D'},

];


// Image pairs for spot the difference task - these were sources from Readers' Digest
var spot_diff_stim_array = [
    //{img: '<div class="imagepos"><img src= "spotdiffpic1.png"></div>'},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/balloons.jpg"></div>', num_diff: 8},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/beach.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/bikes.jpg"></div>', num_diff: 5},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/breakfast.jpg"></div>', num_diff: 6},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/cafe.jpg"></div>', num_diff: 6},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/cakes.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/donuts.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/flowers.jpg"></div>', num_diff: 4},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/lavender.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/omelette.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/ornaments.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/popcorn.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/runners.jpg"></div>', num_diff: 6},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/salad.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/shoes.jpg"></div>', num_diff: 6},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/soap.jpg"></div>', num_diff: 8},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/stationery.jpg"></div>', num_diff: 5},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/sushi.jpg"></div>', num_diff: 9},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/traffic.jpg"></div>', num_diff: 7},
    {img_distractor: '<div class="imagepos"><img src= "stimuli/spot_diff_stim/yellow.jpg"></div>', num_diff: 7}
];



// Sound stimuli for Relaxation task
var TFD_stim_arr = [
    {
        task: 1,
    
        sound_file: './stimuli/relaxation_stim/brown_piano_1.mp3',
    
        piano_times: [ 10000, 46000, 112000, 124000, 189000, 260000, 271000 ],
    
        colour_times: [ 5000, 17000, 210000, 289000, 320000, 320000 ]
    },
    {
        task: 2,
    
        sound_file: './stimuli/relaxation_stim/brown_piano_2.mp3',
    
        piano_times: [ 38000, 152000, 226000, 261000, 276000 ],
    
        colour_times: [ 18000, 58000, 93000, 182000, 253000, 320000 ],
    }
    ];

