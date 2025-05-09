function showInfo(character) {
    let infoText = '';
    if (character === 'harry') {
        infoText = 'Гаррі Поттер — головний персонаж серії. Він є відомим чарівником, який пережив атаки Волдеморта.';
    } else if (character === 'ron') {
        infoText = 'Рон Візлі — найкращий друг Гаррі Поттера, член родини Візлі. Вірний і сміливий.';
    } else if (character === 'hermione') {
        infoText = 'Герміона Ґрейнджер — одна з найрозумніших студенток Хогвартса, відома своєю допитливістю і знаннями.';
    }

    document.getElementById(character + 'Info').textContent = infoText;
    document.getElementById(character + 'Info').style.display = 'block';
}

function castSpell(spell) {
    let effectText = '';
    if (spell === 'lumos') {
        effectText = 'Лумос! Світло з\'являється на кінці палички.';
    } else if (spell === 'expecto') {
        effectText = 'Експекто Патронум! Ваш патронус з\'являється, ви відчуваєте себе в безпеці!';
    }
