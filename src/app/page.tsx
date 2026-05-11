export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">OrigoERP Web</h1>
          <p className="text-xl text-gray-600">Gestão de vendas sincronizada entre web e mobile</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bem-vindo!</h2>
            <p className="text-gray-600">Versão web do OrigoERP em desenvolvimento</p>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition">
              Fazer Login
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg transition">
              Criar Conta
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Status: Em desenvolvimento</p>
            <p className="text-xs text-gray-400 mt-2">Sincronização com app mobile em breve</p>
          </div>
        </div>
      </div>
    </main>
  );
}
