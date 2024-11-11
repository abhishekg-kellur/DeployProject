# Use the official Python image
FROM python:3.10-slim

RUN apt-get update \
    && apt-get install -y curl jq

# Set the working directory
WORKDIR /app

# Copy the backend code into the container
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

EXPOSE 8000

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]