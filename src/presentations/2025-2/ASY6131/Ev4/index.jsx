import React, { useState } from 'react';
import { Shield, AlertTriangle, Terminal, Activity, Lock, Server, FileText, Database, CheckCircle, Search, Cpu, Bug, Eye, Menu, X, ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../../components/Layout/Layout';

const SeguridadEv4 = () => {
    const [activeTab, setActiveTab] = useState('context');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

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
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 w-full text-left font-medium ${active
                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                }`}
        >
            <Icon size={18} />
            <span>{label}</span>
        </button>
    );

    const SectionHeader = ({ title, subtitle }) => (
        <div className="mb-8 border-b border-white/5 pb-6">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h2>
            <p className="text-slate-400">{subtitle}</p>
        </div>
    );

    const TerminalBlock = ({ title, content }) => (
        <div className="bg-slate-950 rounded-xl overflow-hidden border border-white/10 font-mono text-sm my-4 shadow-2xl">
            <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5 mr-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <Terminal size={14} className="text-slate-500 ml-2" />
                <span className="text-slate-400 text-xs">{title}</span>
            </div>
            <div className="p-4 text-emerald-400 whitespace-pre-wrap overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 leading-relaxed">
                {content}
            </div>
        </div>
    );

    const VulnerabilityCard = ({ vuln }) => (
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-red-500/30 transition-all duration-300 mb-6 group">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded border ${vuln.severity === 'CRÍTICA'
                                ? 'bg-red-500/10 text-red-400 border-red-500/20'
                                : 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                            }`}>
                            {vuln.severity}
                        </span>
                        <span className="text-slate-500 text-sm font-mono">{vuln.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{vuln.service}</h3>
                    <p className="text-slate-400 text-sm mt-1">Port: <span className="font-mono text-slate-300">{vuln.port}</span></p>
                </div>
                <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-3xl font-bold text-white">{vuln.cvss}</span>
                        <div className="text-right">
                            <span className="text-slate-500 text-[10px] uppercase font-bold block">CVSS Score</span>
                            <span className="text-slate-400 text-xs">v3.1 Base</span>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">{vuln.desc}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Terminal size={12} /> Technical Evidence
                    </h4>
                    <div className="bg-slate-950 rounded-lg p-4 text-xs font-mono text-emerald-500 border border-white/10 whitespace-pre-wrap shadow-inner">
                        {vuln.evidence}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Shield size={12} /> Mitigation Strategy
                    </h4>
                    <div className="bg-indigo-500/10 rounded-xl p-4 text-sm text-indigo-200 border border-indigo-500/20 flex items-start gap-3 h-full">
                        <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-indigo-400" />
                        {vuln.mitigation}
                    </div>
                </div>
            </div>
        </div>
    );

    // --- VIEWS ---

    const Dashboard = () => (
        <div className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/5 shadow-2xl col-span-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="flex items-center gap-5 mb-8 relative z-10">
                        <div className="p-4 bg-indigo-500/20 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
                            <Server size={32} className="text-indigo-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-1">Target: Metasploitable 2</h2>
                            <p className="text-slate-400 text-lg">Project Management Server • TechSoluciones</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        {[
                            { label: 'Operating System', val: 'Ubuntu 8.04', sub: 'Hardy Heron' },
                            { label: 'IP Address', val: '192.168.1.100', sub: 'Static /24' },
                            { label: 'Kernel Version', val: 'Linux 2.6.24', sub: 'Vulnerable' },
                            { label: 'Status', val: 'CRITICAL', sub: 'End of Life', alert: true }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950/50 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                <span className="text-slate-500 text-xs uppercase font-bold tracking-wider block mb-1">{item.label}</span>
                                <span className={`font-mono text-lg font-semibold ${item.alert ? 'text-red-400 flex items-center gap-2' : 'text-slate-200'}`}>
                                    {item.alert && <AlertTriangle size={16} />}
                                    {item.val}
                                </span>
                                <span className="text-slate-600 text-xs block mt-1">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl p-6 rounded-3xl border border-white/5 shadow-lg flex flex-col">
                    <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider text-center">Vulnerability Distribution</h3>
                    <div className="flex-1 min-h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={vulnData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                                />
                                <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={40}>
                                    {vulnData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 text-center">
                        <span className="text-4xl font-bold text-white block">5</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Critical / High Issues</span>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2 text-lg">
                    <Activity size={24} /> Executive Context
                </h3>
                <p className="text-indigo-100/80 leading-relaxed text-lg max-w-4xl">
                    TechSoluciones has detected a significant increase in unauthorized access attempts targeting legacy infrastructure.
                    This audit report details the findings of a comprehensive security assessment (Phases 1-4), identifying critical Remote Code Execution (RCE) vectors
                    and proposing an immediate hardening strategy to mitigate risk exposure.
                </p>
            </div>
        </div>
    );

    const ThreatModel = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Phase 1: Threat Modeling"
                subtitle="Asset decomposition and risk analysis using the Microsoft STRIDE methodology."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strideData.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{item.cat}</h3>
                            <span className="text-[10px] uppercase font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded border border-white/5">
                                {item.asset}
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4 font-medium leading-relaxed">{item.desc}</p>
                        <div className="pt-4 border-t border-white/5">
                            <p className="text-xs text-slate-500 leading-relaxed">
                                <span className="text-red-400 font-bold">Risk:</span> {item.risk}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const VulnerabilityAnalysis = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Phase 2: Vulnerability Analysis"
                subtitle="Automated scanning results (Nmap/Nikto) and manual verification via Metasploit Framework."
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

            <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-red-500 rounded-full" />
                    Top 5 Critical Vulnerabilities
                </h3>
                {vulnerabilities.map((v, i) => <VulnerabilityCard key={i} vuln={v} />)}
            </div>
        </div>
    );

    const IncidentResponse = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Phase 3: Incident Response"
                subtitle="Operational playbook based on NIST SP 800-61 r2 for system compromise scenarios."
            />

            <div className="space-y-8 relative pl-8 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2 hidden md:block" />

                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="absolute left-[-2rem] md:left-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 text-emerald-500 shadow-xl flex items-center justify-center z-10 md:-translate-x-1/2">
                        <Search size={18} />
                    </div>
                    <div className="w-full md:w-[calc(50%-3rem)] bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-emerald-400">1. Identification & Detection</h4>
                            <span className="font-mono text-xs bg-slate-950 px-2 py-1 rounded text-slate-500">T0</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-2 text-sm text-slate-400">
                            <li>Monitor traffic on port 6200 (vsftpd backdoor) or 6667.</li>
                            <li>Command: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">netstat -antp</code> to view active connections.</li>
                            <li>Review logs: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-xs">/var/log/auth.log</code>.</li>
                        </ul>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="absolute left-[-2rem] md:left-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 text-blue-500 shadow-xl flex items-center justify-center z-10 md:-translate-x-1/2">
                        <Lock size={18} />
                    </div>
                    <div className="w-full md:w-[calc(50%-3rem)] bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-blue-400">2. Containment</h4>
                            <span className="font-mono text-xs bg-slate-950 px-2 py-1 rounded text-slate-500">T+10m</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">Immediate logical isolation without powering down (preserve RAM).</p>
                        <div className="bg-slate-950 p-3 rounded-lg border border-white/5 font-mono text-xs text-blue-300">
                            iptables -I INPUT -s! &lt;ADMIN_IP&gt; -j DROP
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="absolute left-[-2rem] md:left-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 text-red-500 shadow-xl flex items-center justify-center z-10 md:-translate-x-1/2">
                        <Bug size={18} />
                    </div>
                    <div className="w-full md:w-[calc(50%-3rem)] bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-red-400">3. Eradication</h4>
                            <span className="font-mono text-xs bg-slate-950 px-2 py-1 rounded text-slate-500">T+30m</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-2 text-sm text-slate-400">
                            <li>Remove infected binary: <code className="bg-slate-950 px-1.5 py-0.5 rounded text-red-400 font-mono text-xs">apt-get remove --purge vsftpd</code>.</li>
                            <li>Audit <code className="bg-slate-950 px-1.5 py-0.5 rounded text-red-400 font-mono text-xs">/etc/passwd</code> for unauthorized users.</li>
                        </ul>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="absolute left-[-2rem] md:left-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 text-purple-500 shadow-xl flex items-center justify-center z-10 md:-translate-x-1/2">
                        <CheckCircle size={18} />
                    </div>
                    <div className="w-full md:w-[calc(50%-3rem)] bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-purple-400">4. Recovery & Lessons</h4>
                            <span className="font-mono text-xs bg-slate-950 px-2 py-1 rounded text-slate-500">T+2h</span>
                        </div>
                        <p className="text-sm text-slate-400">Restore services using SFTP. Restore DB from offline backups. Implement strict monitoring for 48hrs.</p>
                        <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-200 font-medium text-center">
                            Lesson Learned: Urgent migration of EOL OS required.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    const Hardening = () => (
        <div className="animate-fade-in">
            <SectionHeader
                title="Phase 4: Hardening Plan"
                subtitle="Compensating controls to ensure Confidentiality, Integrity, and Availability (CIA)."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SSH Hardening */}
                <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-blue-500/30 transition-all">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Lock size={20} /></div>
                        SSH Hardening (Port 22)
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">Prevent brute force attacks and usage of compromised keys.</p>
                    <TerminalBlock title="/etc/ssh/sshd_config" content={`# Disable root login
PermitRootLogin no

# Disable password auth (Keys only)
PasswordAuthentication no

# Regenerate keys (CVE-2008-0166 fix)
rm /etc/ssh/ssh_host_*
dpkg-reconfigure openssh-server`} />
                </div>

                {/* MySQL Hardening */}
                <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-yellow-500/30 transition-all">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400"><Database size={20} /></div>
                        MySQL Hardening (Port 3306)
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">Isolate the database from the public network.</p>
                    <TerminalBlock title="/etc/mysql/my.cnf" content={`# Listen only on localhost
bind-address = 127.0.0.1

# Disable local file read
local-infile=0

# Run security script
mysql_secure_installation`} />
                </div>

                {/* Service Reduction */}
                <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-red-500/30 transition-all lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-red-500/20 rounded-lg text-red-400"><Server size={20} /></div>
                        Attack Surface Reduction
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <h4 className="font-bold text-red-200 mb-1">Telnet (23)</h4>
                            <p className="text-xs text-red-300/70 mb-3">Plaintext protocol. Insecure.</p>
                            <code className="bg-slate-950 px-2 py-1 rounded text-red-400 text-xs font-mono block text-center">apt-get remove telnetd</code>
                        </div>
                        <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <h4 className="font-bold text-red-200 mb-1">FTP (21)</h4>
                            <p className="text-xs text-red-300/70 mb-3">Active backdoor. Use SFTP.</p>
                            <code className="bg-slate-950 px-2 py-1 rounded text-red-400 text-xs font-mono block text-center">apt-get remove vsftpd</code>
                        </div>
                        <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <h4 className="font-bold text-red-200 mb-1">distcc (3632)</h4>
                            <p className="text-xs text-red-300/70 mb-3">Unauthenticated RCE.</p>
                            <code className="bg-slate-950 px-2 py-1 rounded text-red-400 text-xs font-mono block text-center">update-rc.d -f distcc remove</code>
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
        <Layout>
            <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
                {/* Mobile Header */}
                <div className="md:hidden bg-slate-900/50 backdrop-blur-md p-4 flex justify-between items-center border-b border-white/5 sticky top-16 z-40">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg">
                        <Shield className="fill-current" size={20} /> Security Audit
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 hover:bg-white/5 rounded-lg">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Sidebar / Navigation */}
                <nav className={`fixed inset-0 top-16 z-30 bg-slate-950/95 backdrop-blur-xl md:static md:bg-transparent md:w-80 md:flex-shrink-0 border-r border-white/5 p-6 flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                    <div className="mb-8">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium mb-6 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Hub
                        </button>
                        <h1 className="text-2xl font-bold text-white leading-tight">
                            Security Audit <br />
                            <span className="text-indigo-400">Report</span>
                        </h1>
                        <p className="text-slate-500 text-sm mt-2">ASY6131 • Evaluation 4</p>
                    </div>

                    <div className="space-y-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">Navigation</p>
                        <NavButton active={activeTab === 'context'} label="Context & Assets" icon={Activity} onClick={() => { setActiveTab('context'); setIsMenuOpen(false); }} />
                        <NavButton active={activeTab === 'threats'} label="Phase 1: Threats" icon={Eye} onClick={() => { setActiveTab('threats'); setIsMenuOpen(false); }} />
                        <NavButton active={activeTab === 'vulns'} label="Phase 2: Pentesting" icon={Bug} onClick={() => { setActiveTab('vulns'); setIsMenuOpen(false); }} />
                        <NavButton active={activeTab === 'incident'} label="Phase 3: Incidents" icon={AlertTriangle} onClick={() => { setActiveTab('incident'); setIsMenuOpen(false); }} />
                        <NavButton active={activeTab === 'hardening'} label="Phase 4: Hardening" icon={Lock} onClick={() => { setActiveTab('hardening'); setIsMenuOpen(false); }} />
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
                                TS
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">TechSoluciones</p>
                                <p className="text-[10px] text-slate-400 uppercase tracking-wide">Confidential</p>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-1 p-6 md:p-12 overflow-y-auto w-full max-w-7xl mx-auto">
                    {renderContent()}
                </main>
            </div>
        </Layout>
    );
};

export default SeguridadEv4;
