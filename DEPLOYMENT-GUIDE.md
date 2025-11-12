# 🚀 Deployment Guide - Portfolio Website

## ✅ Status Git
- ✅ Git initialized
- ✅ Files committed
- ⏳ Need to push to GitHub (authentication required)

---

## 📋 STEP 1: Setup GitHub Authentication

### Option A: Using Personal Access Token (PAT)

#### 1. Create Personal Access Token
1. **Buka GitHub:** https://github.com/settings/tokens
2. **Klik:** "Generate new token" → "Generate new token (classic)"
3. **Settings:**
   - Note: `Portfolio Deployment`
   - Expiration: `90 days` atau `No expiration`
   - **Select scopes:**
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow`
4. **Klik:** "Generate token"
5. **COPY TOKEN** (hanya muncul sekali!)

#### 2. Update Remote URL dengan Token
Jalankan di terminal (ganti `YOUR_TOKEN` dengan token yang di-copy):

```powershell
cd c:\portfolio2025\portfolio

# Format: https://YOUR_TOKEN@github.com/zxxxdmf/portfolio1.git
git remote set-url origin https://YOUR_TOKEN@github.com/zxxxdmf/portfolio1.git

# Push ke GitHub
git push -u origin master
```

**Contoh:**
```powershell
git remote set-url origin https://ghp_xxxxxxxxxxxxxxxxxxxx@github.com/zxxxdmf/portfolio1.git
git push -u origin master
```

---

### Option B: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop:**
   https://desktop.github.com/

2. **Install dan Login** dengan akun GitHub Anda

3. **Add Repository:**
   - File → Add Local Repository
   - Choose: `C:\portfolio2025\portfolio`
   - Klik "Add Repository"

4. **Push:**
   - Klik "Publish repository"
   - Atau: Repository → Push

---

### Option C: Using Git Credential Manager

```powershell
cd c:\portfolio2025\portfolio

# Install Git Credential Manager (if not installed)
# Download: https://github.com/git-ecosystem/git-credential-manager/releases

# Configure
git config --global credential.helper manager

# Try push again (akan muncul browser untuk login)
git push -u origin master
```

---

## 📋 STEP 2: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Buka:** https://vercel.com/

2. **Login/Sign Up** dengan GitHub account

3. **Import Project:**
   - Klik "Add New" → "Project"
   - Import dari GitHub
   - Pilih repository: `zxxxdmf/portfolio1`

4. **Configure Project:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

5. **Environment Variables** (OPTIONAL):
   - Tidak ada yang perlu ditambahkan untuk project ini

6. **Deploy:**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - ✅ Done! URL live akan muncul

---

### Method 2: Via Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd c:\portfolio2025\portfolio
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Link to existing project: N
# - Project name: portfolio1
# - Directory: ./
# - Override settings: N

# Production Deploy
vercel --prod
```

---

## 🎯 STEP 3: Final Checks

### After Deployment, Check:

✅ **1. Website Loading:**
- Visit your Vercel URL
- Check all sections load correctly

✅ **2. Responsive Design:**
- Test mobile view
- Test tablet view
- Test desktop view

✅ **3. Music Player:**
- Click music button
- Test volume control
- Verify music plays

✅ **4. Navigation:**
- Test all menu links
- Test mobile hamburger menu
- Test smooth scrolling

✅ **5. Animations:**
- Check background animation
- Check scroll animations
- Check hover effects

---

## 🐛 Troubleshooting

### Issue: Music Not Playing on Vercel

**Solution:** Check file size and upload limit
- Vercel free tier: 100MB max file size
- Your music file: ~5-10MB (should be OK)

If needed, compress audio:
```bash
# Use online tool: https://www.freeconvert.com/audio-compressor
# Or use ffmpeg:
ffmpeg -i "Malcolm Todd - Sweet Boy (Lyrics).mp3" -b:a 128k output.mp3
```

### Issue: Build Failed

**Check:**
1. `package.json` has correct dependencies
2. All imports are correct
3. No TypeScript errors

**Fix:**
```powershell
# Test build locally
npm run build

# If successful, commit and push
git add .
git commit -m "Fix build issues"
git push
```

### Issue: 404 on Routes

**Solution:** Vercel handles this automatically for SPA
- Check `vite.config.ts` is correct
- Vercel auto-detects Vite projects

---

## 📝 Commands Cheat Sheet

### Git Commands
```powershell
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push
git push

# Pull latest
git pull
```

### Vercel Commands
```powershell
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## 🎉 Success Checklist

- [ ] GitHub repository pushed successfully
- [ ] Vercel project imported
- [ ] Build successful on Vercel
- [ ] Website accessible via Vercel URL
- [ ] All features working (music, animations, responsive)
- [ ] Custom domain added (optional)

---

## 🔗 Useful Links

- **GitHub Repo:** https://github.com/zxxxdmf/portfolio1
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Tokens:** https://github.com/settings/tokens
- **Vercel Docs:** https://vercel.com/docs

---

## 📞 Need Help?

If you encounter issues:
1. Check Vercel build logs
2. Check browser console (F12)
3. Verify all files are pushed to GitHub
4. Check file paths are correct (case-sensitive on Vercel)

---

**Last Updated:** November 12, 2025
**Status:** Ready for deployment ✅
