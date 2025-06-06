import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f9fafb');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create book geometry
    const createBook = (x: number, y: number, z: number, color: string, rotation: number) => {
      const bookGroup = new THREE.Group();
      
      // Book body
      const bookGeometry = new THREE.BoxGeometry(1, 0.1, 1.5);
      const bookMaterial = new THREE.MeshStandardMaterial({ color });
      const book = new THREE.Mesh(bookGeometry, bookMaterial);
      
      // Book cover
      const coverGeometry = new THREE.BoxGeometry(1.05, 0.02, 1.55);
      const coverMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.2).getHex() 
      });
      const cover = new THREE.Mesh(coverGeometry, coverMaterial);
      cover.position.y = 0.06;
      
      bookGroup.add(book);
      bookGroup.add(cover);
      
      bookGroup.position.set(x, y, z);
      bookGroup.rotation.y = rotation;
      
      return bookGroup;
    };

    // Add books
    const books = [
      createBook(-2, 0, 0, '#3b82f6', Math.PI * 0.05),
      createBook(-0.5, 0.2, 0.3, '#ef4444', -Math.PI * 0.1),
      createBook(1.2, 0.4, -0.2, '#10b981', Math.PI * 0.15),
      createBook(0.3, 0.6, 0.5, '#8b5cf6', -Math.PI * 0.05),
    ];
    
    books.forEach(book => scene.add(book));

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#3b82f6',
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate books
      books.forEach((book, i) => {
        book.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
        book.rotation.y += 0.001;
      });
      
      // Animate particles
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className={`canvas-container ${className}`} />;
};

export default ThreeScene;