"use client";

import { useState } from "react";

const baseModels = ["YesMix v1.5", "DreamShaper v7", "RealisticVision v5.1"];
const loras = ["None", "Kafka - Honkai", "Anime Eyes", "Fantasy Character"];
const samplers = ["Euler", "Euler a", "DPM++ 2M", "Heun", "DDIM"];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [baseModel, setBaseModel] = useState(baseModels[0]);
  const [lora, setLora] = useState(loras[0]);
  const [sampler, setSampler] = useState(samplers[0]);
  const [steps, setSteps] = useState(20);
  const [cfg, setCfg] = useState(7.5);
  const [seed, setSeed] = useState(-1); // -1 = random

  const handleGenerate = async () => {
    setLoading(true);
    setImage("");

    // Dummy delay dan image sementara
    setTimeout(() => {
      const url = `https://via.placeholder.com/512x512?text=${encodeURIComponent(
        prompt
      )}`;
      setImage(url);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎨 Kamil Generate AI
      </h1>

      {/* Prompt Positif */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">Prompt Positif</label>
        <textarea
          rows={2}
          placeholder="Contoh: a girl with red hair, anime style..."
          className="w-full border rounded-lg p-3 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      {/* Prompt Negatif */}
      <div className="mb-6">
        <label className="text-sm font-medium block mb-1">Prompt Negatif</label>
        <textarea
          rows={2}
          placeholder="Contoh: blurry, ugly, deformed, bad anatomy..."
          className="w-full border rounded-lg p-3 text-sm"
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
        />
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Base Model */}
        <div>
          <label className="text-sm font-medium">Base Model</label>
          <select
            className="w-full border rounded p-2 mt-1"
            value={baseModel}
            onChange={(e) => setBaseModel(e.target.value)}
          >
            {baseModels.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </select>
        </div>

        {/* LoRA */}
        <div>
          <label className="text-sm font-medium">LoRA</label>
          <select
            className="w-full border rounded p-2 mt-1"
            value={lora}
            onChange={(e) => setLora(e.target.value)}
          >
            {loras.map((lora) => (
              <option key={lora}>{lora}</option>
            ))}
          </select>
        </div>

        {/* Sampler */}
        <div>
          <label className="text-sm font-medium">Sampler</label>
          <select
            className="w-full border rounded p-2 mt-1"
            value={sampler}
            onChange={(e) => setSampler(e.target.value)}
          >
            {samplers.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Steps */}
        <div>
          <label className="text-sm font-medium">Steps</label>
          <input
            type="number"
            className="w-full border rounded p-2 mt-1"
            value={steps}
            onChange={(e) => setSteps(parseInt(e.target.value))}
            min={1}
            max={150}
          />
        </div>

        {/* CFG Scale */}
        <div>
          <label className="text-sm font-medium">CFG Scale</label>
          <input
            type="number"
            step="0.1"
            className="w-full border rounded p-2 mt-1"
            value={cfg}
            onChange={(e) => setCfg(parseFloat(e.target.value))}
            min={1}
            max={20}
          />
        </div>

        {/* Seed */}
        <div>
          <label className="text-sm font-medium">Seed</label>
          <input
            type="number"
            className="w-full border rounded p-2 mt-1"
            value={seed}
            onChange={(e) => setSeed(parseInt(e.target.value))}
          />
          <p className="text-xs text-gray-500">Gunakan -1 untuk seed random</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
      >
        {loading ? "⏳ Generating..." : "🚀 Generate"}
      </button>

      {/* Image Preview */}
      {image && (
        <div className="mt-8 text-center">
          <img src={image} alt="Generated" className="rounded shadow mx-auto" />
        </div>
      )}
    </div>
  );
}
