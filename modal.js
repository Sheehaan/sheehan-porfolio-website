// ==========================================
// MODAL - Project Detail Popup
// ==========================================

import { getAllProjects } from './projects.js';

let currentModal = null;

// Create modal HTML
function createModalHTML() {
  return `
    <div class="modal-overlay" id="project-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="modal">
        <div class="modal-header">
          <h2 class="sr-only">Project Details</h2>
          <button class="modal-close" aria-label="Close modal">
            <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          </button>
        </div>
        <div class="modal-body">
          <img class="modal-image" src="" alt="">
          <h3 class="modal-title"></h3>
          <p class="modal-description"></p>
          <a class="btn btn-primary" href="" target="_blank" rel="noopener noreferrer">
            Visit Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5V3H3v7h2V5zm0 8h2v-2H3v7h2v-2zm10 4h2v-2h-2v2zm4 0h2v-2h-2v2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Open modal with project data
export function openProjectModal(projectId) {
  const projects = getAllProjects();
  const project = projects.find(p => p.id === projectId);

  if (!project) return;

  // Create modal if it doesn't exist
  let modal = document.getElementById('project-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', createModalHTML());
    modal = document.getElementById('project-modal');
    initModalListeners();
  }

  // Populate modal content
  const modalImage = modal.querySelector('.modal-image');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const modalLink = modal.querySelector('.modal-body .btn');

  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalLink.href = project.link;

  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  currentModal = modal;

  // Focus trap
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.focus();
}

// Close modal
export function closeProjectModal() {
  if (!currentModal) return;

  currentModal.classList.remove('active');
  currentModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentModal = null;
}

// Initialize modal event listeners
function initModalListeners() {
  const modal = document.getElementById('project-modal');

  // Close button
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', closeProjectModal);

  // Click outside modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentModal) {
      closeProjectModal();
    }
  });
}

// Initialize project card click handlers
export function initProjectCards() {
  document.querySelectorAll('[data-project-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking on the "View Project" button
      if (e.target.closest('.btn')) return;
      
      const projectId = parseInt(card.getAttribute('data-project-id'));
      openProjectModal(projectId);
    });

    // Also handle button clicks
    const viewBtn = card.querySelector('[data-view-project]');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = parseInt(card.getAttribute('data-project-id'));
        openProjectModal(projectId);
      });
    }
  });
}