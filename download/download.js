const uap = new UAParser();
const uaOS = uap.getOS().name;
const uaCPU = uap.getCPU().architecture;

const version = '0.2.0';
const appUrlPrefix = `https://github.com/qration/app/releases/download/${version}/Qration_${version}`;
const appFileNames = {
  'windows': {
    icon: 'ti ti-brand-windows',
    distributions: {
      'windows-x64-msi': {
        name: 'Windows (x64, MSI)',
        fileName: '_x64_en-US.msi',
      },
      'windows-x64-exe': {
        name: 'Windows (x64, EXE)',
        fileName: '_x64-setup.exe',
      },
      'windows-x86': {
        name: 'Windows (x86)',
        fileName: '_x86-setup.exe',
      },
      'windows-arm64-msi': {
        name: 'Windows (AArch64, MSI)',
        fileName: '_arm64_en-US.msi',
      },
      'windows-arm64-exe': {
        name: 'Windows (AArch64, EXE)',
        fileName: '_arm64-setup.exe',
      },
    }
  },
  'macos': {
    icon: 'ti ti-brand-finder',
    distributions: {
      'macos-x64': {
        name: 'MacOS (x64)',
        fileName: '_x64.dmg',
      },
      'macos-arm64': {
        name: 'MacOS (AArch64)',
        fileName: '_aarch64.dmg',
      },
    }
  },
  'linux': {
    icon: 'ti ti-brand-ubuntu',
    distributions: {
      'linux-x64-appimage': {
        name: 'Linux (x64, AppImage)',
        fileName: '_amd64.AppImage',
      },
      'linux-arm64-appimage': {
        name: 'Linux (AArch64, AppImage)',
        fileName: '_aarch64.AppImage',
      },
      'linux-x64-deb': {
        name: 'Linux (x64, Deb)',
        fileName: '_amd64.deb',
      },
      'linux-arm64-deb': {
        name: 'Linux (AArch64, Deb)',
        fileName: '_aarch64.deb',
      },
      'linux-x64-rpm': {
        name: 'Linux (x64, RPM)',
        fileName: '-1.x86_64.rpm',
      },
      'linux-arm64-rpm': {
        name: 'Linux (AArch64, RPM)',
        fileName: '-1.aarch64.rpm',
      },
    }
  },
  'android': {
    icon: 'ti ti-brand-android',
    distributions: {
      'android': {
        name: 'Android',
        fileName: '_universal.apk',
      }
    }
  },
}

window.addEventListener('load', () => {
  const downloadLink = document.getElementById('download-link');
  const downloadButton = document.getElementById('download-button');
  const downloadIcon = document.getElementById('download-icon');

  let fileObj = null;

  switch (uaOS) {
    case 'Windows':
      switch (uaCPU) {
        case 'arm':
          fileObj = appFileNames['windows'].distributions['windows-arm64-msi'];
          break;
        case 'amd64':
          fileObj = appFileNames['windows'].distributions['windows-x64-msi'];
          break;
        case 'x86':
          fileObj = appFileNames['windows'].distributions['windows-x86'];
          break;
        default:
          fileObj = appFileNames['windows'].distributions['windows-x86'];
      }
      break;
    case 'macOS':
      switch (uaCPU) {
        case 'arm':
          fileObj = appFileNames['macos'].distributions['macos-arm64'];
          break;
        case 'amd64':
          fileObj = appFileNames['macos'].distributions['macos-x64'];
          break;
        default:
          fileObj = appFileNames['macos'].distributions['macos-arm64'];
      }
      break;
    case 'Linux':
      switch (uaCPU) {
        case 'arm':
          fileObj = appFileNames['linux'].distributions['linux-arm64-appimage'];
          break;
        case 'amd64':
          fileObj = appFileNames['linux'].distributions['linux-x64-appimage'];
          break;
        default:
          fileObj = appFileNames['linux'].distributions['linux-x64-appimage'];
      }
      break;
    case 'Android':
      fileObj = appFileNames['android'].distributions['android'];
  }

  if (fileObj != null) {
    downloadLink.setAttribute('href', appUrlPrefix + fileObj.fileName);
    downloadButton.innerText = `Download for ${fileObj.name}`;
    if (appFileNames[uaOS.toLowerCase()]) {
      console.log(appFileNames[uaOS.toLowerCase()].icon)
      downloadIcon.className = appFileNames[uaOS.toLowerCase()].icon;
      console.log(downloadIcon);
    }
  }
});
