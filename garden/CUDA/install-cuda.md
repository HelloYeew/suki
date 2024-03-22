# Install CUDA

Follow https://docs.nvidia.com/cuda/cuda-installation-guide-linux for full detail

Download CUDA Toolkit from https://developer.nvidia.com/cuda-downloads, for older version go to `Resources > Archive of Previous CUDA Releases`. Recommend using runfile (local) installer.

## Troubleshooting

### Uninstall CUDA / Conflict detected during install

```bash
# To uninstall cuda
sudo /usr/local/cuda-11.4/bin/cuda-uninstaller 
# To uninstall nvidia
sudo /usr/bin/nvidia-uninstall
```

Or if not found, try uninstall it from `apt`

```bash
sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*" 
sudo apt-get --purge remove "*nvidia*"
# Clean file in /usr/local
sudo rm -rf /usr/local/cuda*
```

### Failed to initialize NVML: Driver/library version mismatch

Use `dmesg` for check error

```bash
sudo dmesg
```

Example output :

```
[54371.542762] NVRM: API mismatch: the client has the version 525.116.04, but
               NVRM: this kernel module has the version 520.61.05.  Please
               NVRM: make sure that this kernel module and all NVIDIA driver
               NVRM: components have the same version.
```

Solution :

```bash
# Remove all nvidia driver
sudo apt purge nvidia* libnvidia*
# Reinstall nvidia driver with client version, see example output
sudo apt install nvidia-driver-525
```
