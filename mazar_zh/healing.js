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
var textStr = '而麻扎共有7种类型：<br> 水麻扎：如泉、湖、河；<br> 自然麻扎：如树、山；<br> 人造麻扎：如墓、墓碑、堡垒、磨坊；<br> 国家麻扎：受国家保护的国家财产；<br> 动物麻扎：它们的精神支持者是神圣的动物；<br> 失踪却没有死亡的人的麻扎；<br> 石头麻扎';

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
            value: '制作麻扎铭文，使点和划介于阿拉伯语字母和自然痕迹之间。'
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
var textStr2 = '换句话说，这是一个大墓地。在麻扎以南，有一个平坦的平原；在东部、北部和西部，有一片沼泽地。';

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
        text: '在地图上找到42.6° N,74.9° E，获取地形和建筑的三维信息，你将明白',
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
var textStr3 = '波动的苦难场的意思<br>()<br>（）<br>【】<br>「」<br>{}<br>[]';
var textEl4 = document.getElementById('baishe');
var textStr4 = '注意白蛇，许多人梦见过一条白蛇，它显然是泉的主人';
var textEl5 = document.getElementById('beiteng');
var textStr5 = '背痛和有恐惧症的人倾向于靠在这种麻扎上';

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
        text: '制作黄昏中位于费尔干纳盆地的无名麻扎。',
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
tl6.to("#free", { duration: 4, text: "伟大（）战争的参与者。", delay: 2 })
    .to("#free", { duration: 4, text: "伟大（）战争和（）事件中致残的人。", delay: 2 })
    .to("#free", { duration: 4, text: "在打击国际恐怖主义中受到伤害而致残的。", delay: 2 })
    .to("#free", { duration: 8, text: "伟大（）战争期间，由于无私的劳动和无可挑剔的军事服务，获得了勋章和奖章的。", delay: 2 })
    .to("#free", { duration: 4, text: "曾被关押在（）的囚犯。", delay: 2 })
    .to("#free", { duration: 4, text: "70岁以上的老兵。", delay: 2 })
    .to("#free", { duration: 4, text: "多生多育的母亲。", delay: 2 })
    .to("#free", { duration: 6, text: "在伟大（）战争时期，经历过非法强行动员，后被平反的。", delay: 2 })
    .to("#free", { duration: 4, text: "（）英雄。", delay: 2 })
    .to("#free", { duration: 4, text: "（）主义英雄。", delay: 2 })
    .to("#free", { duration: 4, text: "参加了消除（）事故后果的人。", delay: 2 })
    .to("#free", { duration: 4, text: "其残疾与（）有因果关系的残疾人。", delay: 2 })
    .to("#free", { duration: 8, text: "在（）事故（）期间死亡、因事故后果引起疾病而死亡的人的家人。", delay: 2 })
    .to("#free", { duration: 6, text: "事故发生后自愿从居住区离开，重新安置的人。", delay: 2 })
    .to("#free", { duration: 8, text: "重新安置的18岁以下儿童和青少年，包括疏散当天处于胎儿期的。", delay: 2 })
    .to("#free", { duration: 4, text: "在（）月（）日（）发生的事件,", delay: 2 })
    .to("#free", { duration: 4, text: "（）月（）日（）发生的事件,", delay: 2 })
    .to("#free", { duration: 4, text: "（）月（）日至（）日（）的事件,", delay: 2 })
    .to("#free", { duration: 6, text: "以及（）年（）月（）事件中遇害的人的家人。", delay: 2 })
    .to("#free", { duration: 4, text: "但需提供证明文件。", delay: 2 })
    .to("#free", { duration: 4, opacity: 0, delay: 2 })

sound.onplay = function () {
    tl6.play();
}




var textEl8 = document.getElementById('heshui');
var textStr8 = '记下化学成分。';
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
    .to("#jixia", { duration: 4, text: '记下这里的夜晚和一切规则。<br>留意你的乳头。<br>如果将人约束在某个完全黑暗的限制性环境，再浸泡在温水里，那么ta会很快开始听见、看见……' }, '-=4')
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
    }, 'linkchuxian')
    .to('#link', {
        opacity: 1,
        duration: 4
    }, 'linkchuxian')
    .to('#chair', {
        opacity: 0,
        duration: 4
    }, 'qi')
    .to('#rule', {
        opacity: 0,
        duration: 2
    }, 'qi')