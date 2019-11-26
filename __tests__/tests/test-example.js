import Page from '../pages/example-page-model';

fixture `Testcafe home fixture`
  .page `http://devexpress.github.io/testcafe/example/`;

const page = new Page();

test('Testcafe home', async t => {
  await t
    .typeText(page.nameInput, 'Peter')
    .click(page.macOSRadioButton)
    .click(page.featureList[0].checkbox)
    .click(page.interfaceSelect)
    .click(page.interfaceSelectOption.withText('Both'))
    .expect(page.nameInput.value).contains('Peter');
});
