import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from '@chakra-ui/react';
import BallSpinner from '../BallSpinner';
import { loadGLTFModel } from '@/lib/three';
import data from './data';

const easeOutCirc = (x) => Math.sqrt(1 - (x - 1) ** 4);

function Ball3d() {
  const refContainer = useRef();
  const refRenderer = useRef();
  const [loading, setLoading] = useState(true);

  const handleWindowResize = useCallback(() => {
    const { current: rendererEl } = refRenderer;
    const { current: containerEl } = refContainer;
    if (containerEl && rendererEl) {
      const cWidth = containerEl.clientWidth;
      const cHeight = containerEl.clientHeight;

      rendererEl.setSize(cWidth, cHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (!container) return;
    const cWidth = container.clientWidth;
    const cHeight = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      // 2.3, // original
      1.5, // small
      cWidth / cHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(cWidth, cHeight);
    refRenderer.current = renderer;

    // const target = new THREE.Vector3(0.3, -0.1, 0.15);
    // const target = new THREE.Vector3(0.25, -0.1, 0.15);
    const target = new THREE.Vector3(0.2, -0.1, 0.13);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    );
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xf1e7db, 3);
    scene.add(ambientLight);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    let req = null;
    let frame = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;

      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 10;
        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }

      renderer.render(scene, camera);
    };

    loadGLTFModel(scene, data.url, {
      name: 'ball',
      receiveShadow: false,
      castShadow: false,
    }).then(() => {
      setLoading(false);
      animate();
    });

    container.appendChild(renderer.domElement);
    return () => {
      cancelAnimationFrame(req);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  return (
    <Box
      ref={refContainer}
      className="ball-3d"
      m="auto"
      // mt={['0', '-60px', '-60px']}
      mt={['20px', 0]}
      mb={['-60px', '-140px', '-180px']}
      w={[280, 480, 560]}
      h={[280, 480, 560]}
      overflow="hidden"
    >
      {loading && <BallSpinner />}
    </Box>
  );
}

export default Ball3d;
