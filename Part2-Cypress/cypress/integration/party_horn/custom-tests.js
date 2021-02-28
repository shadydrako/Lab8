describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes',() => {
    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes',() => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');

    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  })

  it('Volume of <audio> element changes when change volume of slider', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume',0.33);
    });
  });

  it('Image and sound sources change when you select part horn radio button',() => {
    cy.get('#radio-party-horn').check();

    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });

    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    })
  });

  it('Volume image changes when increasing vol from 0 -> 1',() => {
    cy.get('#volume-slider').invoke('val',0).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider').invoke('val',1).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  })


  it('Volume image changes when increasing vol from 33 -> 34',() => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val',34).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  })

  
  it('Volume image changes when increasing vol from 66 -> 67',() => {
    cy.get('#volume-slider').invoke('val',66).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val',67).trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  })

  it('Honk Button Disabled when Textbox input empty', () => {
    cy.get('#volume-number').clear();

    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled','disabled');
    })
  })
  
  it('Honk Button Disabled when textbox input is non-number',() => {
    cy.get('#volume-number').clear().type("h");
        cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled','disabled');
    });
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled','disabled');
    });
  });

  it('Error is shown when number outside range for textbox input', () => {
    cy.get('#volume-number').clear().type("-1");
    cy.get('#honk-btn').click();

    cy.get("input:invalid").should('have.length',1);
  });
});

