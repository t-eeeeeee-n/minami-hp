FROM node:20.9-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Install bun
RUN apt-get update && apt-get install -y curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Copy package files and install dependencies
COPY ./package.json ./bun.lockb /app/
RUN bun install

# Copy the current directory contents into the container
COPY ./ /app/

# Build the application
RUN bun run build

# Expose the correct port (Next.js default is 3000)
EXPOSE 5173

# Command to run the application
CMD ["bun", "run", "start", "-p", "5173"]
