'use strict';

/* global THREE */

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({
        canvas
    });

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = .5;
    camera.position.y = 1;

    const controls = new THREE.OrbitControls(camera, canvas);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000000');

    // Ambient Lighting
    var light = new THREE.AmbientLight(0x404040, 5);
    //   light.castShadows = true
    scene.add(light);


    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('tomb2.glb', (gltf) => {
        const root = gltf.scene;
        scene.add(root);
        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        // update the Trackball controls to handle the new size
        controls.maxDistance = boxSize * 2;
        controls.target.copy(boxCenter);
        controls.update();
    });

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        controls.autoRotate = true;
        controls.update();
        // renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }


    requestAnimationFrame(render);
}

// main();


//gsap part

var textEl = document.getElementById('leixing');
var textStr = 'and there are 7 types of mazars:<br> 1. Water mazars: spring, lake, river<br> 2. Nature mazars: tree, mountain<br>3. Man made mazars: cemetery, headstone, fortress, mill<br>4. State mazars: national properties guarded by state<br>5. Animal mazars (spiritual supporters of those mazars are sacred animals) <br> 6. Mazars of people who just disappeared but not died<br>7. Stone Mazars';

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionStart',
        pin: true,   // pin the trigger element while active
        end: "+=5000", // end after scrolling 3000px beyond the start
        scrub: true
    }
})
tl1.to('#word', {
    opacity: 1,
    duration: 8
}, 'tag')
    .to(textEl, 8, {
        text: {
            value: textStr
        },
        ease: Linear.noease,
    }, 'tag')
    .to('#tuopian', {
        text: {
            value: 'Make an inscription of Mazar. Make the dots and strokes appear to be between the Arabic alphabet and the traces of nature.'
        },
        duration: 2
    }, 'tag2')
    .to('#leixing', {
        opacity: 0,
        duration: 2
    }, 'tag2')
    // .to('#gongyou', {
    //     opacity: 0,
    //     duration: 2
    // }, 'tag2')
    .to('#word', {
        opacity: 0.5,
        duration: 2
    }, 'tag2')
    .to('#sectionStart', {
        autoAlpha: 0,
        duration: 2
    })


var textEl2 = document.getElementById('xisheng');
var textStr2 = 'In other words, it is a big cemetery. To the south of the mazar, there is a flat plain; to the east, north, and west, there is swampy land.';

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionMap',
        pin: true,   // pin the trigger element while active
        end: "+=5000", // end after scrolling 3000px beyond the start
        scrub: true
    }
})
tl2.to('#mapBlack', {
    opacity: .3,
    y: '80vh',
    duration: 4
}, 'tag3')
    .to(textEl2, 8, {
        text: {
            value: textStr2
        },
        ease: Linear.noease,
    }, 'tag3')
    .to('#spring', {
        opacity: 1,
        duration: 2
    }, '-=2')
    .from('#spring', {
        y: '-81%',
        duration: 5
    }, 'tag4')
    .to('#xisheng', {
        opacity: 0,
        duration: 2
    }, 'tag4')
    .to('#mingbai', {
        text: 'Find 42.6° N, 74.9° E on the map, get 3D information of the terrain and buildings, you will understand',
        duration: 4
    }, 'tag5')
    .to('#mapBlack', {
        opacity: 1,
        duration: 4
    }, 'tag5')
    .to('#sectionMap', {
        autoAlpha: 0,
        duration: 2
    })

//video part
var textEl3 = document.getElementById('kunan');
var textStr3 = 'the meaning of fluctuating suffering field<br>()<br>（）<br>【】<br>「」<br>{}<br>[]';
var textEl4 = document.getElementById('baishe');
var textStr4 = 'Pay attention to the white snake. Many people have dreamed of a white snake. It is obviously the owner of the spring.';
var textEl5 = document.getElementById('beiteng');
var textStr5 = 'People with backaches or phobias tend to lean on this type of Mazar';

const tl3 = gsap.timeline()
    .to(textEl3, 4, {
        text: {
            value: textStr3
        },
        ease: Linear.noease,
    }, 'tong')
    .to('#kunan', 4, { y: '-130%' }, 'tong')
    .to(textEl4, 4, {
        text: {
            value: textStr4
        },
        ease: Linear.noease,
    })
    .to('#kunan', {
        opacity: 0,
        duration: 2
    }, '-=2')
    .to(textEl5, 4, {
        text: {
            value: textStr5
        },
        ease: Linear.noease,
    })
    .to('#baishe', {
        opacity: 0,
        duration: 2
    }, '-=4')
    .to('#beiteng', {
        opacity: 0,
        duration: 2
    })
    .to('#video1', {
        opacity: 1,
        duration: 2,
    })
    .to('#sectionVideo', {
        autoAlpha: 0,
        duration: 2,
        delay: 5
    })
ScrollTrigger.create({
    scrub: true,
    trigger: '#sectionVideo',
    end: '+=5000',
    animation: tl3,
    pin: true,
})

// var textEl6 = document.getElementById('shanghai');
// var textStr6 = '禁止将可能对其神圣性造成伤害的东西（大声的音乐，生火的东西，酒精性饮料和武器）带到神圣的场所或危害它们。';
// var textEl7 = document.getElementById('kongju');
// var textStr7 = '现在，泉水是对恐惧症的一种治疗方法。它还对口或鼻子变形、瘫痪、癫痫和肌腱痉挛的人有帮助。';

// const tl4 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '#sectionMosque',
//         pin: true,   // pin the trigger element while active
//         end: "+=3000", // end after scrolling 3000px beyond the start
//         scrub: true
//     }
// })
// tl4.to(textEl6, 4, {
//     text: {
//         value: textStr6
//     },
//     ease: Linear.noease,
// },'-=2')
//     .to('#mosque', {
//         opacity: 0,
//         duration: 4
//     }, '-=4')
//     .to(textEl7, 4, {
//         text: {
//             value: textStr7
//         },
//         ease: Linear.noease,
//     })
//     .to('#statue', {
//         opacity: 0,
//         duration: 4
//     }, '-=4')
//     .to('#shanghai', {
//         opacity: 0,
//         duration: 4
//     }, '-=4')
//     .to('#sectionMosque', {
//         autoAlpha: 0,
//         duration: 2
//     })


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#threed',
        pin: true,   // pin the trigger element while active
        end: "+=3000", // end after scrolling 3000px beyond the start
        scrub: true
    }
})
tl.to('canvas', {
    onStart: main,
    duration: 10
}, 'yiqi')
    .to('#wuming', {
        duration: 4,
        text: 'Make a nameless Mazar in the Fergana Valley at dusk.',
        delay: 8
    }, 'yiqi')
    .to('#i1', {
        autoAlpha: 1,
        duration: 3,
        delay: 4
    })
    .to('#i3', {
        duration: 4,
        delay: 2,
        y: '90%',
        right: '10%',
        width: '40%',
        autoAlpha: 1
    },
        'same')
    .to('#i2', {
        duration: 4,
        delay: 1,
        top: '5%',
        left: 0,
        width: '40%',
        autoAlpha: 1
    },
        'same')
    .to('#i4', {
        duration: 6,
        // delay: 1,
        bottom: 0,
        left: '15%',
        width: '45%',
        autoAlpha: 1
    },
        'same')
    .to('#i1', {
        duration: 5,
        delay: 2,
        scale: .7
    },
        'same')
    .to('#threed', {
        autoAlpha: 0,
        duration: 2,
    })


// document.querySelector("body").addEventListener("click", () => {
//   main();
//   tl.play();
// })

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionFree',
        pin: true,   // pin the trigger element while active
        // end: "+=3000", // end after scrolling 3000px beyond the start
    }
})
tl5.to('#free', {
    opacity: 1,
    duration: 2
})

var sound = document.getElementById('covert');
var num = 1;
function playAudio(sth) {
    if (num = 1) {
        sth.play();
        num++;
    }
}

const tl6 = gsap.timeline({ paused: true })
tl6.to("#free", { duration: 4, text: "Participants of the Great () War.", delay: 2 })
    .to("#free", { duration: 4, text: "Disabled people of the Great () War and () events.", delay: 2 })
    .to("#free", { duration: 4, text: "Citizens who have suffered in the fight against international terrorism.", delay: 2 })
    .to("#free", { duration: 8, text: "Citizens awarded medals for selfless labor and military service during the Great () War.", delay: 2 })
    .to("#free", { duration: 4, text: "Former prisoners of ().", delay: 2 })
    .to("#free", { duration: 4, text: "Veterans over the age of 70.", delay: 2 })
    .to("#free", { duration: 4, text: "Mothers with many children.", delay: 2 })
    .to("#free", { duration: 6, text: "Citizens who underwent illegal forcible mobilization into labor army and were rehabilitated.", delay: 2 })
    .to("#free", { duration: 4, text: "Heroes of ().", delay: 2 })
    .to("#free", { duration: 4, text: "Heroes of ()lism.", delay: 2 })
    .to("#free", { duration: 8, text: "Persons who took part in the elimination of the consequences of the accident at ().", delay: 2 })
    .to("#free", { duration: 6, text: "Disabled people for whom a causal relationship was established.", delay: 2 })
    .to("#free", { duration: 4, text: "Families of those who died during the accident.", delay: 2 })
    .to("#free", { duration: 4, text: "Persons evacuated and resettled", delay: 2 })
    .to("#free", { duration: 8, text: "including those who were in an intrauterine state on the day of evacuation.", delay: 2 })
    .to("#free", { duration: 6, text: "Members of the families of the victims who suffered", delay: 2 })
    .to("#free", { duration: 4, text: "in the events of () in (),", delay: 2 })
    .to("#free", { duration: 4, text: "() in (),", delay: 2 })
    .to("#free", { duration: 4, text: "() in () and in () events in (),", delay: 2 })
    .to("#free", { duration: 4, text: "with supporting documents.", delay: 2 })
    .to("#free", { duration: 4, opacity: 0, delay: 2 })

sound.onplay = function () {
    tl6.play();
}




var textEl8 = document.getElementById('heshui');
var textStr8 = 'Remember the chemical composition of the water.';
const tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionChemical',
        pin: true,   // pin the trigger element while active
        end: "+=1000", // end after scrolling 3000px beyond the start
        scrub: true
    }
})
tl7.to(textEl8, 4, {
    text: {
        value: textStr8
    },
    ease: Linear.noease,
})
    .to('#indoor', {
        opacity: 1,
        duration: 4
    }, '-=4')
    .to('#chemical', {
        opacity: 1,
        duration: 4
    }, '-=4')
// .to('#sectionChemical', {
//     autoAlpha: 0,
//     duration: 2
// })



const tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionLast',
        pin: true,   // pin the trigger element while active
        end: "+=5000", // end after scrolling 3000px beyond the start
        scrub: true
    }
})
tl8.to('#disco', {
    y: '-190vh',
    duration: 4
}, 'yi')
    .to('#rule', {
        y: '-75vh',
        duration: 4
    }, 'yi')
    .to('#door2', {
        y: '-200vh',
        duration: 6
    }, 'yi')
    .to('#mapFlat', {
        scale: 4,
        x: '-76%',
        y: '85%',
        duration: 6
    }, 'yi')
    .to("#jixia", { duration: 4, text: '   Remember the night and all the rules here.<br>  Pay attention to your nipples.<br>If a person is confined to a restricted environment without light and sound, and immersed in warm water, <br>he/she will soon begin to hear and see...' }, '-=4')
    .to('#mapFlat', {
        opacity: 0,
        duration: 0.5,
        delay: 2
    }, 'xiaoshi')
    .to('#jixia', {
        opacity: 0,
        duration: 0.5,
        delay: 2
    }, 'xiaoshi')
    .to('#video2', {
        opacity: 1,
        duration: 4
    })
    .to('#chair', {
        opacity: 0,
        duration: 4
    }, 'qi')
    .to('#rule', {
        opacity: 0,
        duration: 2
    }, 'qi')