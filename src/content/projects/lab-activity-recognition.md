---
A complete human activity recognition pipeline using YOLOv8 keypoint detection. Covers the full lifecycle from raw video acquisition through annotation, augmentation, training, and Flask-based inference serving — all under MIT license.
---

## Architecture

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Acquisition | preprocessing/acquisition-data.py | Frame extraction from raw video (every 3rd frame) |
| Annotation | preprocessing/annotation-data.py | Label creation using external tools (LabelImg/Roboflow) |
| Augmentation | preprocessing/augmentation-data.py | ALBumentations-based dataset diversity |
| Splitting | preprocessing/train-val-test-split.py | Stratified train/val/test dataset split |
| Training | training/train.py | YOLO config-driven training with YAML specs |
| Inference | inference/main.py | Flask serving with real-time processing |

---

## Pipeline Overview

```
Preprocessing  →  Training  →  Inference
     ↓               ↓              ↓
 Acquisition     Model          Flask
 Annotation      Training       Serving
 Augmentation   YAML Config
 Split
```

### Stage 1: Preprocessing

Four-stage data preparation pipeline:

| Step | Script | Output |
|------|--------|--------|
| Acquisition | `acquisition-data.py` | Extracted frames from video |
| Annotation | `annotation-data.py` | YOLO-format label files |
| Augmentation | `augmentation-data.py` | Transformed image variants |
| Splitting | `train-val-test-split.py` | Train/val/test directories |

Output structure:
```
data/output/images/{train,val,test}/
data/output/labels/{train,val,test}/
```

### Stage 2: Training

Configuration-driven training using YAML dataset specs:

```yaml
path: ./data/lab-activity
train: images/train
val: images/val
names:
  0: activity_class
```

```bash
python training/train.py --cfg configs/model/yolov8.yaml --data configs/dataset/labact-keypoint-recognition.yaml
```

### Stage 3: Inference

Flask-based inference server supporting real-time video stream processing with keypoint detection output, activity classification results, and visualization overlay.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Detection | YOLOv8 (ultralytics) |
| Framework | PyTorch >= 2.1 |
| Image Processing | OpenCV >= 4.9, ALBumentations >= 1.4 |
| Serving | Flask >= 3.0 |
| Evaluation | scikit-learn, matplotlib |
| Data Structures | pandas, numpy, tqdm |
| License | MIT |

---

## Impact

Complete open-source pipeline under MIT license with documented workflow. Production-ready Flask inference server for real-world activity recognition with comprehensive preprocessing and training infrastructure.
