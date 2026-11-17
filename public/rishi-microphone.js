// Resample the device rate to 16 kHz PCM without retaining microphone recordings.
class RishiMicrophone extends AudioWorkletProcessor {
  constructor() {
    super();
    this.ratio = sampleRate / 16000;
    this.phase = 0;
    this.sum = 0;
    this.count = 0;
    this.samples = [];
  }
  process(inputs) {
    const channel = inputs[0]?.[0];
    if (!channel) return true;
    for (const sample of channel) {
      this.sum += sample;
      this.count++;
      this.phase++;
      if (this.phase >= this.ratio) {
        const value = Math.max(-1, Math.min(1, this.sum / this.count));
        this.samples.push(value < 0 ? value * 32768 : value * 32767);
        this.phase -= this.ratio;
        this.sum = 0;
        this.count = 0;
      }
      if (this.samples.length === 640) {
        const bytes = new ArrayBuffer(1280);
        const view = new DataView(bytes);
        this.samples.forEach((value, index) => view.setInt16(index * 2, value, true));
        this.port.postMessage(bytes, [bytes]);
        this.samples = [];
      }
    }
    return true;
  }
}
registerProcessor('rishi-microphone', RishiMicrophone);
