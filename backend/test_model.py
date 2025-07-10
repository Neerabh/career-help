import pickle

# Step 1: Load the trained model
with open('stream_predictor.pkl', 'rb') as f:
    model = pickle.load(f)

# Step 2: Example input
# 👉 Enter marks for English, Hindi, Math, Science, SST
student_marks = [[60, 60, 60, 88, 40]]  # (you can change these numbers)

# Step 3: Predict
predicted_streams = model.predict(student_marks)

# Step 4: Output
print("Eligible Streams:")
for stream in predicted_streams[0]:
    if stream != 'None':
        print("-", stream)