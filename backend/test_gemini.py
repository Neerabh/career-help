import google.generativeai as genai

# Configure Gemini API with direct key
API_KEY = "AIzaSyBep95iyTrOtSf8rXqkFtiK8zJdhKwgxiI"  # Make sure this is your exact API key from Google AI Studio

print("Testing API key...")
print("API Key length:", len(API_KEY))
print("API Key starts with:", API_KEY[:5] + "..." if len(API_KEY) > 5 else API_KEY)

try:
    # Configure the API
    genai.configure(api_key=API_KEY)
    
    # List available models
    print("\nAvailable models:")
    for m in genai.list_models():
        print(f"- {m.name}")
    
    # Initialize the model
    model = genai.GenerativeModel('gemini-1.5-pro')
    
    # Test the model
    response = model.generate_content("What is 2+2?")
    print("\nAPI Response:", response.text)
    print("API Key is working correctly!")
except Exception as e:
    print("\nError:", str(e))
    print("\nTroubleshooting tips:")
    print("1. Make sure you're using the correct API key from Google AI Studio")
    print("2. The API key should be a long string starting with 'AI'")
    print("3. Don't include any spaces or extra characters")
    print("4. Make sure the API key is active and not expired")
    print("5. Check if you have access to the Gemini API in your region") 