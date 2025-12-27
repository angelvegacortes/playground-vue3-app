import * as pdfMake from 'pdfmake/build/pdfmake'
import 'pdfmake/build/vfs_fonts'
import type { TDocumentDefinitions } from 'pdfmake/interfaces'

export const generatePdf = () => {
  const documentDefinition: TDocumentDefinitions = {
    header: {
      text: 'sample header',
      alignment: 'center',
    },
    footer: {
      text: 'sample footer',
      alignment: 'center',
    },
    content: [
      'First paragraph',
      'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    ],
  }

  pdfMake.createPdf(documentDefinition).open()
}
