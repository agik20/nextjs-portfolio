---
A computer vision system for automatic criminal suspect localization through CCTV feeds using YOLOv10s for face detection and FaceNet embeddings with SVM classification for identity matching — achieving perfect accuracy across 3 subjects in simulated surveillance scenarios.
---

## Architecture

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Face Detection | YOLOv10s (ultralytics) | Real-time face bounding box detection in CCTV frames |
| Face Embedding | FaceNet (facenet-pytorch) | 128-dimensional embedding vector generation |
| Classification | SVM (scikit-learn) | Match/no-match decision via embedding comparison |
| Streaming | Pi Camera (Raspberry Pi) | Remote CCTV video feed acquisition |
| Inference Pipeline | threading + queue | Asynchronous frame processing with worker pattern |
| Frontend | Flask + HTML/CSS/JS | Interactive search dashboard with history logs |

---

## System Workflow

```
Input (NIK) → Database Retrieval → Reference Embedding
       ↓
CCTV Stream → Frame Grab → YOLOv10s Detection → Face Crop
       ↓
FaceNet Embedding → SVM Classification → Match Decision
       ↓
Output (cropped face, timestamp, CCTV location, history log)
```

### Stage 1: Face Detection

YOLOv10s processes each CCTV frame at configurable confidence threshold (0.4). Detects bounding boxes for all visible faces with real-time performance on both CPU and GPU.

### Stage 2: Face Recognition Pipeline

Detected faces undergo a three-stage recognition process:

1. **Embedding Generation** — FaceNet (InceptionResnetV1) converts cropped face into 128-dim embedding vector
2. **Dimensionality Reduction** — PCA transforms embeddings for efficient SVM classification
3. **Similarity Matching** — SVM classifier compares query embedding against reference database; threshold-based match decision

### Stage 3: Production Inference (`server/inference/main_basic.py`)

Threaded inference pipeline supporting:
- Multi-threaded frame processing via Queue pattern
- Configurable FPS cap (30fps max) and minimum processing interval
- GPU-accelerated inference when CUDA available, graceful fallback to CPU
- Automatic model loading and garbage collection

---

## Evaluation Results

Perfect classification performance achieved on simulated dataset:

| Metric | Value |
|--------|-------|
| Accuracy | 1.0 (100%) |
| Precision (macro) | 1.0 |
| Recall (macro) | 1.0 |
| F1 Score (macro) | 1.0 |

Per-class results across 3 subjects (252-253 samples each):
- **abyan**: precision=1.0, recall=1.0, f1=1.0, support=252
- **agi**: precision=1.0, recall=1.0, f1=1.0, support=253
- **apis**: precision=1.0, recall=1.0, f1=1.0, support=252

Confusion matrix shows zero off-diagonal misclassifications — perfect separation between all subjects.

---

## Web Application

Four-page Flask dashboard:

| Page | Functionality |
|------|-------------|
| Home | System overview and architecture diagram |
| CCTV | Real-time streaming from multiple camera feeds with location selector |
| Search | NIK-based suspect lookup with instant identification results |
| History | Complete detection log with filtering by date and subject |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Detection | YOLOv10s, ultralytics |
| Face Recognition | FaceNet (facenet-pytorch), InceptionResnetV1 |
| Classification | SVM (scikit-learn), PCA |
| Processing | OpenCV, NumPy, Pillow |
| Serving | Flask, Flask-CORS |
| Hardware Integration | Raspberry Pi camera streaming |
| Deployment | JSON metrics reporting, CSV logging |
| License | MIT |

---

## Impact

Demonstrates end-to-end AI surveillance pipeline from real-time detection to identity verification with perfect classification accuracy. The system reduces manual monitoring workload and provides timestamped, location-tagged evidence for law enforcement workflows. Designed for scalability across multi-camera networks with simulated NIK-based database integration.
