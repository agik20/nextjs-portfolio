---
A dual-model YOLOv8 system for real-time exam proctoring — combining object detection (smartphone identification via bbox) and pose estimation (cheating behavior classification) with TensorRT-optimized edge deployment on Jetson Orin Nano.
---

## Architecture

The system uses two parallel YOLOv8 models for comprehensive cheating detection:

| Model | Task | Architecture | Weights |
|-------|------|-------------|---------|
| **Bbox Detector** | Smartphone object detection | YOLOv8m | `yolov8m.pt` |
| **Pose Estimator** | Behavior classification (no-cheat / provide-object / see-friends-work) | YOLOv8s-pose | `yolov8s-pose.pt` |

Both models export to **TensorRT `.engine` format** for low-latency inference on NVIDIA Jetson Orin Nano.

---

## Pipeline Overview

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Preprocess  │ -> │   Training  │ -> │  Inference  │
│  (split)     │    │  (YAML cfg) │    │  (Flask/CLI)│
└─────────────┘    └─────────────┘    └─────────────┘
```

### Stage 1: Preprocessing (`scripts/preprocess.py`)

Atomic image-label transformation supporting three modes:
- **Letterbox** — preserves aspect ratio with padding
- **Crop** — center-crop to target size
- **Stretch** — non-uniform resize (not recommended)

Also applies JPEG masking to validation splits to simulate real-world compression artifacts.

### Stage 2: Training (`scripts/train.py`)

Configuration-driven training via YAML dataset specs:

```bash
# Bbox model (smartphone detection)
python scripts/train.py --task bbox --data configs/dataset/smartphone-detection.yaml

# Pose model (behavior classification)
python scripts/train.py --task pose --data configs/dataset/cheating-keypoint-recognition.yaml --epochs 50
```

Default hyperparameters (from `configs/model/config.yaml`):

| Parameter | Bbox | Pose |
|-----------|------|------|
| Base weights | yolov8m.pt | yolov8s-pose.pt |
| Epochs | 100 | 100 |
| Image size | 640 | 640 |
| Batch size | 8 | 8 |
| Mosaic | 0.5 | — |
| Mixup | 0.1 | — |
| Patience | 10 | 10 |

### Stage 3: Inference (`scripts/main.py`)

Production-grade inference server supporting:
- Video file processing
- Webcam live stream
- Flask MJPEG streaming for web dashboard
- Automated evidence capture with timestamps and classification CSV logs

---

## Evaluation Suite

Comprehensive test coverage across three modules:

| Test File | Coverage | Key Assertions |
|-----------|----------|---------------|
| `test_data.py` | Data acquisition, annotation, splitting | File pair matching, class extraction, stratified split integrity |
| `test_models.py` | Evaluation metrics (pure functions) | mAP50 computation, OKS calculation, confusion matrix, precision/recall/F1 |
| `test_regression.py` | Transform determinism, annotation deduplication | Letterbox output shape, keypoint remapping, class balancing, IoU calculation |

Evaluation metrics include:
- **mAP@0.5** — mean average precision at IoU threshold 0.5
- **OKS** — Object Keypoint Similarity for pose accuracy
- **Confusion Matrix** — per-class precision, recall, F1 score
- **Prediction Filtering** — IoU-based matching between ground truth and predictions

---

## Dataset Configuration

Three supported dataset schemas:

| Config File | Purpose | Classes |
|-------------|---------|---------|
| `smartphone-detection.yaml` | Bbox model training | 0: smartphone |
| `cheating-keypoint-recognition.yaml` | Pose model training | 0: no-cheating, 1: provide-object, 2: see-friends-work |
| `labact-keypoint-recognition.yaml` | Lab activity recognition | (activity classes) |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Detection Framework | ultralytics (YOLOv8) |
| Deep Learning | PyTorch >= 2.1 |
| Image Processing | OpenCV >= 4.9, ALBumentations >= 1.4 |
| Data Pipeline | Python, Pandas, NumPy |
| Serving | Flask >= 3.0 (MJPEG streaming) |
| Monitoring | watchdog (file system change detection) |
| Edge Deployment | TensorRT (.engine export) |
| Testing | unittest (3 test modules) |

---

## Impact

Recognized with **Top 3 Favorite Thesis Award** for innovation in real-time exam monitoring. The dual-model approach demonstrates practical deployment of edge AI for academic integrity, achieving sub-3s latency on resource-constrained hardware while maintaining high detection accuracy.
