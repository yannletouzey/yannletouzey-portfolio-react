import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import './index.scss'
export default function Canvas( { degValue, degreesValue, setDegreesValue } ) {

  const canvas = useRef(null)
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const textureLoader = new THREE.TextureLoader()
  const particleTexture = textureLoader.load('/particles/9.png')

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas.current
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const geometry = new THREE.BufferGeometry()
    const count = 500
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      alphaMap: particleTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(geometry, particlesMaterial)
    const group = new THREE.Group()
    group.add(particles)
    scene.add(group)
    function animate() {
      group.rotation.y += 0.0001
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <canvas id="canvas" className="canvas" ref={canvas}></canvas>
  )
}
