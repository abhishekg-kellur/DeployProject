# Use the official Python image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the backend code into the container
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 8000 for the FastAPI app
EXPOSE 8000

# Run the FastAPI server with Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]