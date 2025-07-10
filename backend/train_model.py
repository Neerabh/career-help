import pickle
from sklearn.ensemble import RandomForestClassifier

# Sample training (this should be done earlier and your model should already be saved)
X_train = [[100, 70, 80, 90, 80], [60, 50, 55, 40, 70], [85, 78, 92, 89, 91]]  # Example data
y_train = [['Commerce', 'Science'], ['Arts'], ['PCM']]  # Example streams

model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model
with open("stream_predictor.pkl", "wb") as f:
    pickle.dump(model, f)