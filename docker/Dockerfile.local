FROM node:20.9-bullseye-slim

# Set working directory
WORKDIR /app

# Install bun
RUN apt-get update && apt-get install -y curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Copy source code and install dependencies
COPY ./ /app/
RUN bun install --force

# Expose the required port
EXPOSE 5173

# Default command to run bun dev
CMD ["bun", "dev", "-p", "5173"]
