//<라이브러리> (남들이 미리 만들어 놓은 코드 덩어리)
//import(라이브러리 이름); -> (이름)을 가져다 쓸 것 이다
//import *(모든것) form 'three'
//as(별명)

import * as THREE from 'three'; 
//three라는 라이브러리로부터 모든 기능을 가져와 쓰겠다. 이 라이브러리 안의 기능은 내가 THREE라고 부르겠다

//<라이브러리 기능 가져다 쓰기>
// = 을 기준으로 앞부분이 변수, 뒷부분이 변수에 들어가는 데이터
//const: 상수 (한 번 정해지면 바꿀 수 x)
//객체 지향 -> 붕어빵 굽기

const scene = new THREE.Scene();
//장면 = 새로운 THREE.장면; , 새로운 것을 THREE에서 Scene를 가져다 쓴다
scene.background = new THREE.COLOR(0xf0f0f0); 
//훙내내고자 하는 대상이 가지고 있는 속성, 내가 백그라운드 장면에 색상을 넣고 싶어 그걸 THREE에서 가져올거야
//매개변수: 괄호 안 내용

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHegiht, 0.1, 1000);
//(시야각, 화면 비율, 얼마나 가까운지, 얼마나 떨어져있는지)
camera.position.set(0, 5, 10); //(x,y,z)
camera.lookat(0, 2, 0); //카메라가 보는 방향 (x,y,z)

window.addEventListener('pointerdown', (event)=> {
	mouse.X = (event.clientX / window.innerWidth) * 2 -1;
	mouse.Y = (event.clientY / window.innerHegiht) * 2 +1;  //마우스 위치

	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObject(ball);

	if (intersects.length > 0){
		isDragging = true;
		velocity =0;

		const normal = new THREE.Vector3();
		camera.getWorldDirection(normal);
		dragPlane.setFromNormalAndCoplanarPoint(normal.negate(), ball.position);
	}
});