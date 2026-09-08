"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      colors[i * 3] = 0.79 + Math.random() * 0.17;
      colors[i * 3 + 1] = 0.66 + Math.random() * 0.29;
      colors[i * 3 + 2] = 0.38 + Math.random() * 0.27;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
}
