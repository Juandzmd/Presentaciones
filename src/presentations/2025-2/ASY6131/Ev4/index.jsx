import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Terminal, Activity, Lock, Server, FileText, Database, CheckCircle, Search, Cpu, Bug, Eye, Menu, X, ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

const SeguridadEv4 = () => {
    const [activeTab, setActiveTab] = useState('context');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Load chatbot
    useEffect(() => {
        // Load the chatbot plugin script
        const script1 = document.createElement('script');
        script1.src = 'https://app.chatgptbuilder.io/webchat/plugin.js?v=6';
        script1.async = true;
        document.body.appendChild(script1);

        // Setup chatbot after plugin loads
        script1.onload = () => {
            const script2 = document.createElement('script');
            script2.innerHTML = `ktt10.setup({id:"z8Tn7uNnAfNPfIPvsVrY",accountId:"1754827",color:"#0777FF"})`;
            document.body.appendChild(script2);
        };

        // Cleanup on unmount
        return () => {
            document.body.removeChild(script1);
            // Remove chatbot widget if exists
            const chatWidget = document.querySelector('[id^="ktt10"]');
            if (chatWidget) chatWidget.remove();
        };
    }, []);

    // --- DATA ---
    const vulnData = [
        { name: 'Crítica', count: 2, color: '#ef4444' },
        { name: 'Alta', count: 3, color: '#f97316' },
        { name: 'Media', count: 2, color: '#eab308' },
        { name: 'Baja', count: 1, color: '#3b82f6' },
    ];

    const vulnerabilities = [
        {
            id: 'CVE-2011-2523',
            service: 'vsftpd 2.3.4',
            port: '21/tcp',
            severity: 'CRÍTICA',
            cvss: 9.8,
            desc: 'Backdoor en el código fuente. Permite ejecución remota de comandos (root) si el usuario contiene ":)".',
            evidence: `[*] 192.168.1.100:21 - Banner: 220 (vsFTPd 2.3.4)
[*] 192.168.1.100:21 - USER: user:)
[*] 192.168.1.100:21 - PASS: pass
[*] Found shell.
[*] Command shell session 1 opened (192.168.1.10:4444 -> 192.168.1.100:6200)
# id
uid=0(root) gid=0(root)`,
            mitigation: 'Eliminar vsftpd, instalar versión limpia/actualizada o migrar a SFTP.'
        },
        {
            id: 'CVE-2010-2075',
            service: 'UnrealIRCd 3.2.8.1',
            port: '6667/tcp',
            severity: 'CRÍTICA',
            cvss: 9.8,
            desc: 'Backdoor troyanizado en el archivo tarball oficial. Permite RCE enviando comando "AB" al puerto.',
            evidence: `[*] Connected to 192.168.1.100:6667...
[*] Sending backdoor command...
[*] Command shell session 2 opened...
# whoami
root`,
            mitigation: 'Detener servicio. No tiene uso comercial justificado. Desinstalar.'
        },
        {
            id: 'CVE-2004-2687',
            service: 'distcc v1',
            port: '3632/tcp',
            severity: 'ALTA',
            cvss: 9.8,
            desc: 'Compilador distribuido confía en cualquier cliente. Ejecución de comandos arbitrarios sin auth.',
            evidence: `use exploit/unix/misc/distcc_exec
RHOST => 192.168.1.100
Payload => cmd/unix/reverse
Shell session opened. User: daemon.`,
            mitigation: 'Bloquear puerto 3632 en firewall o desinstalar servicio.'
        },
        {
            id: 'CVE-2008-0166',
            service: 'OpenSSH 4.7p1',
            port: '22/tcp',
            severity: 'ALTA',
            cvss: 7.5,
            desc: 'Debian OpenSSL Flaw. Entropía débil en generación de claves. Claves predecibles.',
            evidence: `ssh-vulnkey -a /etc/ssh/ssh_host_rsa_key.pub
COMPROMISED: 2048 37:e4:6a... root@metasploitable`,
            mitigation: 'Regenerar claves host y actualizar OpenSSL. Deshabilitar auth por password.'
        }
    ];

    const strideData = [
        { cat: 'Spoofing', desc: 'Suplantación de identidad', risk: 'Servicios Telnet y FTP transmiten credenciales en texto plano. Riesgo de captura por Sniffing.', asset: 'Admin (SSH/FTP)' },
        { cat: 'Tampering', desc: 'Manipulación de datos', risk: 'Inyección SQL en aplicaciones web permite borrar o alterar registros de la DB.', asset: 'MySQL / Web' },
        { cat: 'Repudiation', desc: 'Repudio', risk: 'Logs almacenados localmente. Si un atacante es root, puede borrarlos sin dejar rastro.', asset: 'Sistema de Archivos' },
        { cat: 'Information Disclosure', desc: 'Divulgación de Información', risk: 'Banner Grabbing en Apache y SSH expone versiones exactas obsoletas.', asset: 'Apache / SSH' },
        { cat: 'Denial of Service', desc: 'Denegación de Servicio', risk: 'Apache 2.2.8 vulnerable a ataques Slowloris (agotamiento de hilos).', asset: 'Apache HTTP' },
        { cat: 'Elevation of Privilege', desc: 'Elevación de Privilegios', risk: 'Kernel 2.6.24 vulnerable a exploits locales (udev/vmsplice) para ser root.', asset: 'Kernel Linux' }
    ];

    // --- SUB-COMPONENTS ---

    const NavButton = ({ active, label, icon: Icon, onClick }) => (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 w-full md:w-auto text-left ${active
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
        >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
        </button>
    );

    const SectionHeader = ({ title, subtitle }) => (
        <div className="mb-8 border-b border-gray-700 pb-4">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-400">{subtitle}</p>
        </div>
    );

    const TerminalBlock = ({ title, content }) => (
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 font-mono text-sm my-4 shadow-xl">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <Terminal size={14} className="text-gray-400" />
                <span className="text-gray-400 text-xs">{title}</span>
            </div>
            <div className="p-4 text-green-400 whitespace-pre-wrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {content}
            </div>
        </div>
    );

    const VulnerabilityCard = ({ vuln }) => (
        <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-red-500 shadow-lg hover:shadow-red-500/10 transition-all mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs font-bold rounded border border-red-800">
                            {vuln.severity}
                        </span>
                        <span className="text-gray-400 text-sm font-mono">{vuln.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{vuln.service}</h3>
                    <p className="text-gray-400 text-sm mt-1">Puerto: {vuln.port}</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold text-red-500">{vuln.cvss}</span>
                    <span className="text-gray-500 text-xs block">CVSS v3.1</span>
                </div>
            </div>

            <p className="text-gray-300 mb-4">{vuln.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Evidencia Técnica</h4>
                    <div className="bg-black rounded p-3 text-xs font-mono text-green-500 border border-gray-700 whitespace-pre-wrap">
                        {vuln.evidence}
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Plan de Mitigación</h4>
                        <div className="bg-blue-900/20 rounded p-3 text-sm text-blue-200 border border-blue-800/50 flex items-start gap-2">
                            <Shield size={16} className="mt-1 flex-shrink-0" />
                            {vuln.mitigation}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- VIEWS ---

    const Dashboard = () => (
        <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-600 rounded-lg">
                            <Server size={24} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Objetivo: Metasploitable 2</h2>
                            <p className="text-gray-400">Servidor de Gestión de Proyectos - TechSoluciones</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="text-gray-500 text-xs uppercase block">Sistema Operativo</span>
                            <span className="text-white font-mono">Ubuntu 8.04 (Hardy Heron)</span>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="text-gray-500 text-xs uppercase block">Dirección IP</span>
                            <span className="text-white font-mono">192.168.1.100</span>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="text-gray-500 text-xs uppercase block">Kernel</span>
                            <span className="text-white font-mono">Linux 2.6.24</span>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="text-gray-500 text-xs uppercase block">Estado</span>
                            <span className="text-red-400 font-bold flex items-center gap-2">
                                <AlertTriangle size={14} /> Crítico / EOL
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Resumen de Hallazgos</h3>
                    <div className="w-full h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={vulnData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="name" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: '#fff' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                                    {vulnData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Total Vulnerabilidades Críticas/Altas: 5</p>
                </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 p-6 rounded-xl">
                <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                    <Activity size={20} /> Contexto del Proyecto
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    TechSoluciones ha detectado un aumento en intentos de acceso no autorizado.
                    Este informe detalla una auditoría de seguridad completa (Fase 1 a 4) para identificar vectores de ataque RCE,
                    exposición de datos sensibles y propone un plan de hardening inmediato.
                </p>
            </div>
        </div>
    );

    const ThreatModel = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Fase 1: Modelado de Amenazas"
                subtitle="Análisis bajo metodología STRIDE (Microsoft) para descomposición de activos."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strideData.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.cat}</h3>
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {item.asset}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2 font-semibold">{item.desc}</p>
                        <p className="text-sm text-gray-300 border-t border-gray-700 pt-3 mt-3">
                            {item.risk}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-4">Mapa de Activos Críticos</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <Database className="mx-auto text-yellow-500 mb-2" />
                        <div className="text-sm font-bold">MySQL Database</div>
                        <div className="text-xs text-gray-500">Datos Clientes (PII)</div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <Server className="mx-auto text-red-500 mb-2" />
                        <div className="text-sm font-bold">Apache Web</div>
                        <div className="text-xs text-gray-500">Interfaz Pública</div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <Lock className="mx-auto text-blue-500 mb-2" />
                        <div className="text-sm font-bold">SSH / FTP</div>
                        <div className="text-xs text-gray-500">Gestión Remota</div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <Cpu className="mx-auto text-purple-500 mb-2" />
                        <div className="text-sm font-bold">Kernel Linux</div>
                        <div className="text-xs text-gray-500">Núcleo Sistema</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const VulnerabilityAnalysis = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Fase 2: Análisis de Vulnerabilidades"
                subtitle="Resultados del escaneo con Nmap, Nikto y validación manual con Metasploit."
            />

            <TerminalBlock
                title="root@kali:~/scans# nmap -p- -sV -sC -O 192.168.1.100"
                content={`Starting Nmap 7.92...
Nmap scan report for 192.168.1.100
Host is up (0.00045s latency).
Not shown: 65505 closed tcp ports (reset)
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp   open  telnet      Linux telnetd
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
3632/tcp open  distcc      distccd v1 ((GNU) 4.2.4 (Ubuntu 4.2.4-1ubuntu4))
6667/tcp open  irc         UnrealIRCd
OS details: Linux 2.6.9 - 2.6.33`}
            />

            <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-6 pl-2 border-l-4 border-blue-500">
                    Top 5 Vulnerabilidades Críticas Detectadas
                </h3>
                {vulnerabilities.map((v, i) => <VulnerabilityCard key={i} vuln={v} />)}
            </div>
        </div>
    );

    const IncidentResponse = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Fase 3: Manejo de Incidentes"
                subtitle="Playbook operativo basado en NIST SP 800-61 r2 para compromiso de sistema."
            />

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Search size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded border border-gray-700 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-200">1. Identificación y Detección</div>
                            <time className="font-mono text-xs text-slate-500">T0</time>
                        </div>
                        <div className="text-slate-400 text-sm">
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Detectar tráfico en puerto 6200 (Backdoor vsftpd) o 6667.</li>
                                <li>Comando: <code className="bg-gray-900 px-1 rounded text-green-400">netstat -antp</code> para ver conexiones activas.</li>
                                <li>Revisar logs: <code className="bg-gray-900 px-1 rounded text-green-400">/var/log/auth.log</code> y <code className="bg-gray-900 px-1 rounded text-green-400">vsftpd.log</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Lock size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded border border-gray-700 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-200">2. Contención</div>
                            <time className="font-mono text-xs text-slate-500">T+10m</time>
                        </div>
                        <div className="text-slate-400 text-sm">
                            <p className="mb-2">Aislamiento lógico inmediato sin apagar (preservar RAM).</p>
                            <TerminalBlock title="Bloqueo de emergencia con iptables" content={`iptables -I INPUT -s! <IP_ADMIN> -j DROP
iptables -I OUTPUT -d! <IP_ADMIN> -j DROP
/etc/init.d/vsftpd stop
killall -9 vsftpd`} />
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Bug size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded border border-gray-700 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-200">3. Erradicación</div>
                            <time className="font-mono text-xs text-slate-500">T+30m</time>
                        </div>
                        <div className="text-slate-400 text-sm">
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Eliminar binario infectado: <code className="bg-gray-900 px-1 rounded">apt-get remove --purge vsftpd</code>.</li>
                                <li>Eliminar usuarios no autorizados en <code className="bg-gray-900 px-1 rounded">/etc/passwd</code>.</li>
                                <li>Borrar claves SSH extrañas en <code className="bg-gray-900 px-1 rounded">/root/.ssh/authorized_keys</code>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <CheckCircle size={20} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded border border-gray-700 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-200">4. Recuperación y Lecciones</div>
                            <time className="font-mono text-xs text-slate-500">T+2h</time>
                        </div>
                        <div className="text-slate-400 text-sm">
                            <p>Restaurar servicios usando SFTP en lugar de FTP. Restaurar base de datos desde backup offline. Implementar monitorización estricta por 48hrs.</p>
                            <p className="mt-2 text-yellow-500 font-semibold">Lección: Migración urgente de S.O. EOL.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    const Hardening = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Fase 4: Plan de Hardening"
                subtitle="Controles compensatorios para confidencialidad, integridad y disponibilidad."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SSH Hardening */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lock size={20} className="text-blue-400" /> Hardening SSH (Puerto 22)
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">Evita fuerza bruta y uso de claves comprometidas.</p>
                    <TerminalBlock title="/etc/ssh/sshd_config" content={`# Deshabilitar root directo
PermitRootLogin no

# Deshabilitar contraseñas (Solo llaves)
PasswordAuthentication no

# Regenerar llaves (CVE-2008-0166 fix)
rm /etc/ssh/ssh_host_*
dpkg-reconfigure openssh-server`} />
                </div>

                {/* MySQL Hardening */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Database size={20} className="text-yellow-400" /> Hardening MySQL (Puerto 3306)
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">Aislar la base de datos de la red pública.</p>
                    <TerminalBlock title="/etc/mysql/my.cnf" content={`# Escuchar solo en localhost
bind-address = 127.0.0.1

# Deshabilitar lectura de archivos locales
local-infile=0

# Ejecutar script de seguridad
mysql_secure_installation`} />
                </div>

                {/* Service Reduction */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Server size={20} className="text-red-400" /> Reducción de Superficie de Ataque
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-red-900/20 p-4 rounded border border-red-900/50">
                            <h4 className="font-bold text-red-200">Telnet (23)</h4>
                            <p className="text-xs text-red-300 mb-2">Texto plano. Inseguro.</p>
                            <code className="bg-black/50 px-2 py-1 rounded text-red-400 text-xs">apt-get remove telnetd</code>
                        </div>
                        <div className="bg-red-900/20 p-4 rounded border border-red-900/50">
                            <h4 className="font-bold text-red-200">FTP (21)</h4>
                            <p className="text-xs text-red-300 mb-2">Backdoor activo. Usar SFTP.</p>
                            <code className="bg-black/50 px-2 py-1 rounded text-red-400 text-xs">apt-get remove vsftpd</code>
                        </div>
                        <div className="bg-red-900/20 p-4 rounded border border-red-900/50">
                            <h4 className="font-bold text-red-200">distcc (3632)</h4>
                            <p className="text-xs text-red-300 mb-2">RCE sin autenticación.</p>
                            <code className="bg-black/50 px-2 py-1 rounded text-red-400 text-xs">update-rc.d -f distcc remove</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- MAIN RENDER ---

    const renderContent = () => {
        switch (activeTab) {
            case 'context': return <Dashboard />;
            case 'threats': return <ThreatModel />;
            case 'vulns': return <VulnerabilityAnalysis />;
            case 'incident': return <IncidentResponse />;
            case 'hardening': return <Hardening />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="presentation-container min-h-screen bg-[#0f172a] text-slate-200 flex flex-col md:flex-row font-sans">
            {/* Styles for scrollbar injection */}
            <style>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #1e293b; }
                ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #2563eb; }
                .animate-fade-in { animation: fadeIn 0.3s ease-in; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            {/* Mobile Header */}
            <div className="md:hidden bg-gray-900 p-4 flex justify-between items-center border-b border-gray-800 sticky top-0 z-50">
                <div className="flex items-center gap-2 text-blue-500 font-bold text-xl">
                    <Shield className="fill-current" /> TechSoluciones
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar / Navigation */}
            <nav className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md md:static md:bg-gray-900 md:w-72 md:flex-shrink-0 border-r border-gray-800 p-6 flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="hidden md:flex items-center gap-2 text-blue-500 font-bold text-2xl mb-10">
                    <Shield className="fill-current" size={32} /> TechSec
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mb-6 md:mb-10 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al Hub
                </button>

                <div className="space-y-2 flex-1">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-4">Menu Principal</p>
                    <NavButton active={activeTab === 'context'} label="Contexto y Activos" icon={Activity} onClick={() => { setActiveTab('context'); setIsMenuOpen(false); }} />
                    <NavButton active={activeTab === 'threats'} label="Fase 1: Amenazas" icon={Eye} onClick={() => { setActiveTab('threats'); setIsMenuOpen(false); }} />
                    <NavButton active={activeTab === 'vulns'} label="Fase 2: Pentesting" icon={Bug} onClick={() => { setActiveTab('vulns'); setIsMenuOpen(false); }} />
                    <NavButton active={activeTab === 'incident'} label="Fase 3: Incidentes" icon={AlertTriangle} onClick={() => { setActiveTab('incident'); setIsMenuOpen(false); }} />
                    <NavButton active={activeTab === 'hardening'} label="Fase 4: Hardening" icon={Lock} onClick={() => { setActiveTab('hardening'); setIsMenuOpen(false); }} />
                </div>

                <div className="mt-auto pt-6 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
                            TS
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">Juan Diaz</p>
                            <p className="text-xs text-gray-500">Asignatura: ASY6131</p>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full max-w-7xl mx-auto">
                {renderContent()}

                <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>© 2025 TechSoluciones - Informe de Auditoría de Seguridad. Confidencial.</p>
                    <p className="mt-1">Basado en estándares PTES y NIST.</p>
                </footer>
            </main>
        </div>
    );
};

export default SeguridadEv4;
