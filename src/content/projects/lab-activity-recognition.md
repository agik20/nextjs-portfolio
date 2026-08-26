---
A complete human activity recognition pipeline using YOLOv8 keypoint detection. Covers the full lifecycle from raw video acquisition through annotation, augmentation, training, and Flask-based inference serving — all under MIT license.
---

## Pipeline Overview

```
Preprocessing -> Training -> Inference
     ↓              ↓            ↓
 Acquisition    Model        Flask
 Annotation     Training     Serving
 Augmentation   YAML Config
 Split
```

---

## Stage 1: Preprocessing

| Script | Purpose |
|--------|---------|
| `acquisition-data.py` | Frame extraction from raw video (every 3rd frame) |
| `annotation-data.py` | Manual label creation using external tools (LabelImg/Roboflow) |
| `augmentation-data.py` | ALBumentations-based augmentation for dataset diversity |
| `train-val-test-split.py` | Stratified dataset splitting |

Output structure:
```
data/output/images/{train,val,test}/
data/output/labels/{train,val,test}/
```

---

## Stage 2: Training

Configuration-driven training using YAML dataset specs:

```yaml
path: ./data/lab-activity
train: images/train
val: images/val
names:
  0: activity_class
```

Training command:
```bash
python training/train.py --cfg configs/model/yolov8.yaml --data configs/dataset/labact-keypoint-recognition.yaml
```

---

## Stage 3: Inference

Flask-based inference server supporting:
- Real-time video stream processing
- Keypoint detection output
- Activity classification results
- Visualization overlay

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Detection | YOLOv8 (ultralytics) |
| Framework | PyTorch |
| Processing | OpenCV, ALBumentations |
| Serving | Flask |
| Evaluation | scikit-learn, matplotlib |

---

## License

MIT — free for academic and commercial use.