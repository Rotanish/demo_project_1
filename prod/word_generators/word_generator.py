from docxtpl import DocxTemplate

def generate_word(input_context):

  # Операции, необходимые для генерации документа

  context = {'demo_1': "DEMO_1"}

  doc = DocxTemplate("./word_generators/docxtpl/demo_1.docx")
  doc.render(context)
  return doc
