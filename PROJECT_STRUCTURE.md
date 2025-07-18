# Project Structure Documentation

## 📁 Directory Structure

```
zahid-marwat/
├── 📁 assets/                    # Static assets and media files
│   ├── 📁 images/               # Images and graphics
│   │   ├── 📷 profile picture.png
│   │   └── 🏢 airloop_logo.png
│   └── 📁 docs/                 # Documentation and downloadable files
│       └── 📄 CV.pdf
├── 📁 src/                      # Source code
│   ├── 📁 css/                  # Stylesheets
│   │   └── 🎨 styles.css
│   └── 📁 js/                   # JavaScript files
│       └── ⚙️ config.js         # Configuration file
├── 📁 scripts/                  # Build and utility scripts
│   ├── 🔧 update-readme.js      # README generator script
│   └── 📝 update-all.bat        # Batch update script
├── 📁 tests/                    # Testing files and utilities
│   ├── 🧪 config-test.html      # Configuration testing
│   ├── 🧪 test-config-loading.html
│   ├── 🧪 test-files.html       # File access testing
│   ├── 🧪 debug-config.html     # Debug configuration
│   └── 🧪 manual-update.html    # Manual update tool
├── 📁 docs/                     # Project documentation
│   └── 📋 (documentation files will be moved here)
├── 🌐 index.html                # Main profile page
├── 📖 README.md                 # Project documentation
└── 📁 .git/                     # Git repository
```

## 🗂️ File Organization

### 📁 `/assets/`
Contains all static assets used in the project:
- **`/images/`**: Profile pictures, logos, and graphics
- **`/docs/`**: PDF files, documents, and downloadable content

### 📁 `/src/`
Source code organized by type:
- **`/css/`**: All stylesheet files
- **`/js/`**: JavaScript files including configuration

### 📁 `/scripts/`
Build and utility scripts:
- **`update-readme.js`**: Automatically generates README.md from config
- **`update-all.bat`**: Batch script to update all components

### 📁 `/tests/`
Testing and debugging tools:
- **`config-test.html`**: Test configuration loading
- **`test-files.html`**: Test file accessibility
- **`debug-config.html`**: Debug configuration issues
- **`manual-update.html`**: Manual update interface

### 📁 `/docs/`
Project documentation:
- Future documentation files will be stored here

## 🔧 Configuration Management

### Main Configuration (`src/js/config.js`)
Central configuration file containing:
- Personal information
- Social media links
- Skills and technologies
- Project details
- File paths and assets

### Auto-Update System
- **HTML**: Automatically updates from `config.js`
- **README**: Generated using `update-readme.js`
- **Batch Script**: `update-all.bat` updates all components

## 🚀 Usage Instructions

### 1. **Update Profile Information**
Edit `src/js/config.js` with your personal details:
```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... other details
}
```

### 2. **Add Assets**
- Place images in `assets/images/`
- Place documents in `assets/docs/`
- Update paths in `config.js`

### 3. **Test Changes**
- Open `tests/config-test.html` to verify configuration
- Use `tests/debug-config.html` to troubleshoot issues

### 4. **Deploy**
- Main page: `index.html`
- GitHub README: `README.md`
- Assets are properly referenced

## 🎯 Benefits of This Structure

### ✅ **Organized**
- Clear separation of concerns
- Easy to navigate and maintain
- Professional project structure

### ✅ **Scalable**
- Easy to add new features
- Modular architecture
- Clean file organization

### ✅ **Maintainable**
- Centralized configuration
- Automated updates
- Comprehensive testing tools

### ✅ **Professional**
- Industry-standard structure
- Proper asset management
- Documentation included

## 🔄 Migration Benefits

### Before (Old Structure)
```
zahid-marwat/
├── config.js
├── index.html
├── styles.css
├── Files/
│   ├── profile picture.png
│   └── CV.pdf
└── (various test files)
```

### After (New Structure)
```
zahid-marwat/
├── src/
├── assets/
├── tests/
├── scripts/
├── docs/
├── index.html
└── README.md
```

### Improvements Made:
1. **Separated concerns**: Source code, assets, and tests are in separate directories
2. **Standardized paths**: All file paths follow modern conventions
3. **Centralized configuration**: All settings in one place
4. **Professional structure**: Follows industry best practices
5. **Better organization**: Easy to find and maintain files

## 📝 Notes

- All file paths have been updated to use the new structure
- Configuration automatically loads from new locations
- Test files moved to dedicated testing directory
- Assets organized by type (images, documents)
- Future-proof structure for easy expansion
