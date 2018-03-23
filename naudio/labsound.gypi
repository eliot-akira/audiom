{
  "include_dirs": [
    "third_party/labsound/include",
    "third_party/labsound/src",
    "third_party/labsound/third_party",
    "third_party/labsound/third_party/stk",
    "third_party/labsound/third_party/libnyquist/include",
    "third_party/labsound/third_party/libnyquist/include/libnyquist",
    "third_party/labsound/third_party/libnyquist/third_party",
    "third_party/labsound/third_party/libnyquist/third_party/rtaudio",
    "third_party/labsound/third_party/libnyquist/third_party/flac/src/include",
    "third_party/labsound/third_party/libnyquist/third_party/libogg/include",
    "third_party/labsound/third_party/libnyquist/third_party/libvorbis/src",
    "third_party/labsound/third_party/libnyquist/third_party/libvorbis/include",
    "third_party/labsound/third_party/libnyquist/third_party/opus/silk",
    "third_party/labsound/third_party/libnyquist/third_party/opus/silk/float",
    "third_party/labsound/third_party/libnyquist/third_party/opus/celt",
    "third_party/labsound/third_party/libnyquist/third_party/opus/libopus/include",
    "third_party/labsound/third_party/libnyquist/third_party/opus/opusfile/src/include",
    "third_party/labsound/third_party/libnyquist/third_party/opus/opusfile/include",
    "third_party/labsound/third_party/libnyquist/third_party/wavpack/include",
    "third_party/labsound/third_party/libnyquist/third_party/wavpack/src",
    "third_party/labsound/third_party/libnyquist/third_party/musepack/include",
    "third_party/labsound/third_party/libnyquist/third_party/musepack/libmpcdec",
    "third_party/labsound/include",
  ],
  "sources": [
    "third_party/LabSound/src/extended/BPMDelay.cpp",
    "third_party/LabSound/src/extended/PingPongDelayNode.cpp",
    "third_party/LabSound/src/internal/src/AudioBus.cpp",
    "third_party/LabSound/src/internal/src/AudioChannel.cpp",
    "third_party/LabSound/src/internal/src/AudioDSPKernel.cpp",
    "third_party/LabSound/src/internal/src/AudioDSPKernelProcessor.cpp",
    "third_party/LabSound/src/internal/src/AudioResampler.cpp",
    "third_party/LabSound/src/internal/src/AudioResamplerKernel.cpp",
    "third_party/LabSound/src/internal/src/AudioUtilities.cpp",
    "third_party/LabSound/src/internal/src/Biquad.cpp",
    "third_party/LabSound/src/internal/src/BiquadDSPKernel.cpp",
    "third_party/LabSound/src/internal/src/BiquadProcessor.cpp",
    "third_party/LabSound/src/internal/src/Cone.cpp",
    "third_party/LabSound/src/internal/src/DelayDSPKernel.cpp",
    "third_party/LabSound/src/internal/src/DelayProcessor.cpp",
    "third_party/LabSound/src/internal/src/DirectConvolver.cpp",
    "third_party/LabSound/src/internal/src/Distance.cpp",
    "third_party/LabSound/src/internal/src/DynamicsCompressor.cpp",
    "third_party/LabSound/src/internal/src/DynamicsCompressorKernel.cpp",
    "third_party/LabSound/src/internal/src/EqualPowerPanner.cpp",
    "third_party/LabSound/src/internal/src/FFTConvolver.cpp",
    "third_party/LabSound/src/internal/src/FFTFrame.cpp",
    "third_party/LabSound/src/internal/src/FFTFrameKissFFT.cpp",
    "third_party/LabSound/src/internal/src/HRTFDatabase.cpp",
    "third_party/LabSound/src/internal/src/HRTFDatabaseLoader.cpp",
    "third_party/LabSound/src/internal/src/HRTFElevation.cpp",
    "third_party/LabSound/src/internal/src/HRTFKernel.cpp",
    "third_party/LabSound/src/internal/src/HRTFPanner.cpp",
    "third_party/LabSound/src/internal/src/MultiChannelResampler.cpp",
    "third_party/LabSound/src/internal/src/Reverb.cpp",
    "third_party/LabSound/src/internal/src/ReverbAccumulationBuffer.cpp",
    "third_party/LabSound/src/internal/src/ReverbConvolver.cpp",
    "third_party/LabSound/src/internal/src/ReverbConvolverStage.cpp",
    "third_party/LabSound/src/internal/src/ReverbInputBuffer.cpp",
    "third_party/LabSound/src/internal/src/SincResampler.cpp",
    "third_party/LabSound/src/internal/src/VectorMath.cpp",
    "third_party/LabSound/src/internal/src/WaveShaperDSPKernel.cpp",
    "third_party/LabSound/src/internal/src/WaveShaperProcessor.cpp",
    "third_party/LabSound/src/internal/src/ZeroPole.cpp",
    "third_party/LabSound/src/internal/src/mac/AudioDestinationMac.cpp",
    "third_party/LabSound/src/internal/src/AudioFileReader.cpp",
    "third_party/LabSound/src/internal/src/mac/FFTFrameMac.cpp",
    "third_party/LabSound/src/extended/ADSRNode.cpp",
    "third_party/LabSound/src/extended/ClipNode.cpp",
    "third_party/LabSound/src/extended/DiodeNode.cpp",
    "third_party/LabSound/src/extended/LabSound.cpp",
    "third_party/LabSound/src/extended/NoiseNode.cpp",
    "third_party/LabSound/src/extended/PeakCompNode.cpp",
    "third_party/LabSound/src/extended/PowerMonitorNode.cpp",
    "third_party/LabSound/src/extended/PWMNode.cpp",
    "third_party/LabSound/src/extended/RecorderNode.cpp",
    "third_party/LabSound/src/extended/SampledInstrumentNode.cpp",
    "third_party/LabSound/src/extended/SfxrNode.cpp",
    "third_party/LabSound/src/extended/SoundBuffer.cpp",
    "third_party/LabSound/src/extended/SpatializationNode.cpp",
    "third_party/LabSound/src/extended/SpectralMonitorNode.cpp",
    "third_party/LabSound/src/extended/SupersawNode.cpp",
    "third_party/LabSound/src/core/AnalyserNode.cpp",
    "third_party/LabSound/src/core/AudioBasicInspectorNode.cpp",
    "third_party/LabSound/src/core/AudioBasicProcessorNode.cpp",
    "third_party/LabSound/src/core/AudioBuffer.cpp",
    "third_party/LabSound/src/core/AudioBufferSourceNode.cpp",
    "third_party/LabSound/src/core/AudioContext.cpp",
    "third_party/LabSound/src/core/AudioDestinationNode.cpp",
    "third_party/LabSound/src/core/AudioNode.cpp",
    "third_party/LabSound/src/core/AudioNodeInput.cpp",
    "third_party/LabSound/src/core/AudioNodeOutput.cpp",
    "third_party/LabSound/src/core/AudioParam.cpp",
    "third_party/LabSound/src/core/AudioParamTimeline.cpp",
    "third_party/LabSound/src/core/AudioScheduledSourceNode.cpp",
    "third_party/LabSound/src/core/AudioSummingJunction.cpp",
    "third_party/LabSound/src/core/BiquadFilterNode.cpp",
    "third_party/LabSound/src/core/ChannelMergerNode.cpp",
    "third_party/LabSound/src/core/ChannelSplitterNode.cpp",
    "third_party/LabSound/src/core/ConvolverNode.cpp",
    "third_party/LabSound/src/core/DefaultAudioDestinationNode.cpp",
    "third_party/LabSound/src/core/DelayNode.cpp",
    "third_party/LabSound/src/core/DynamicsCompressorNode.cpp",
    "third_party/LabSound/src/core/GainNode.cpp",
    "third_party/LabSound/src/core/AudioHardwareSourceNode.cpp",
    "third_party/LabSound/src/core/OfflineAudioDestinationNode.cpp",
    "third_party/LabSound/src/core/OscillatorNode.cpp",
    "third_party/LabSound/src/core/PannerNode.cpp",
    "third_party/LabSound/src/core/RealtimeAnalyser.cpp",
    "third_party/LabSound/src/core/WaveShaperNode.cpp",
    "third_party/LabSound/src/core/WaveTable.cpp",
    "third_party/LabSound/third_party/kissfft/src/kiss_fft.cpp",
    "third_party/LabSound/third_party/kissfft/src/kiss_fftr.cpp",
    "third_party/LabSound/third_party/STK/src/STKInlineCompile.cpp",
    "third_party/LabSound/third_party/ooura/src/fftsg.cpp",
    "third_party/LabSound/src/core/StereoPannerNode.cpp",
    "third_party/LabSound/src/extended/FunctionNode.cpp",
    "third_party/LabSound/third_party/libnyquist/src/OpusDependencies.c",
    "third_party/LabSound/third_party/libnyquist/third_party/opus/celt/celt_decoder.c",
    "third_party/LabSound/third_party/libnyquist/third_party/opus/celt/celt_encoder.c",
    "third_party/LabSound/third_party/libnyquist/src/RiffUtils.cpp",
    "third_party/LabSound/third_party/libnyquist/src/FlacDependencies.c",
    "third_party/LabSound/third_party/libnyquist/src/MusepackDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/MusepackDependencies.c",
    "third_party/LabSound/third_party/libnyquist/third_party/musepack/libmpcdec/mpc_bits_reader.c",
    "third_party/LabSound/third_party/libnyquist/third_party/musepack/libmpcdec/mpc_decoder.c",
    "third_party/LabSound/third_party/libnyquist/third_party/musepack/libmpcdec/mpc_demux.c",
    "third_party/LabSound/third_party/libnyquist/third_party/musepack/libmpcdec/mpc_reader.c",
    "third_party/LabSound/third_party/libnyquist/src/WavEncoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/VorbisDependencies.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/bits.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/extra1.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/extra2.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/float.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/metadata.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/pack.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/tags.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/unpack.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/unpack3.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/words.c",
    "third_party/LabSound/third_party/libnyquist/third_party/wavpack/src/wputils.c",
    "third_party/LabSound/third_party/libnyquist/src/CafDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/AudioDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/AudioDevice.cpp",
    "third_party/LabSound/third_party/libnyquist/src/Common.cpp",
    "third_party/LabSound/third_party/libnyquist/src/FlacDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/VorbisDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/OpusDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/WavDecoder.cpp",
    "third_party/LabSound/third_party/libnyquist/src/WavPackDecoder.cpp",
  ]
}